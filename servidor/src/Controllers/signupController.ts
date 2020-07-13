import {Request, Response} from 'express';

import poolDB from '../database';
import helpers from '../lib/helpers';
import passport from 'passport';


class SignupController{
    

    // public async index(req: Request, res: Response){
    //     const seluser =await poolDB.query('SELECT *FROM usuario');
    //     res.json(seluser);
    // }

    public async createUser(req: Request, res: Response){
        const {passUsua} = req.body;
        console.log(req.body)
        //console.log(passUsua);
        const password = await helpers.encryptPassword(passUsua);
        const resul=  await poolDB.query('INSERT INTO usuario(usuaUsua,passUsua,estaUsua) values(?,?,?) ',[req.body.usuaUsua,password,req.params.estaUsua]);
        //const resul=  await poolDB.query('INSERT INTO usuario SET ?',[req.body]);
        console.log(resul);
        res.json({message: 'Usuario guardado'})
    }

    public async getOne(req: Request, res: Response){
        const {id} = req.params;
        const oneUser = await poolDB.query('SELECT *FROM usuario WHERE idPers= ?',[id]);
        //console.log(req.params.id);
        if(oneUser.length > 0){
            return res.json(oneUser[0]);
        }
        res.status(404).json({text: 'El usuario no existe'});
    }
}

const signupController = new SignupController();
export default signupController;

// const LocalStrategy = require('passport-local').Strategy;

// passport.use('local.signup', new LocalStrategy({
//     usernameField: 'usuaUsua',
//     passwordField: 'password',
//     passReqToCallback: true
// }, async(req:Request, username:string, password:string,done:any) =>{
//     const {estaUsua} = req.body;
//     const newUser ={
//         username,
//         password,
//         estaUsua
//     };
//     newUser.password = await helpers.encryptPassword(password);
//     const resul = await poolDB.query('INSERT INTO usuario SET ? ',[newUser]);
//     console.log(resul);
// }));