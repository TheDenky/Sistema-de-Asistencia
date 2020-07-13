import {Request, Response, NextFunction, Router} from 'express';

import poolDB from '../database';


class LoginController{

    public async index(req: Request, res: Response){
        const {id} = req.params;
        const seluser =await poolDB.query('SELECT *FROM usuario WHERE idPers= ?',[id]);
        res.json(seluser);
        console.log(req.params);
    }

    public async list(req: Request, res: Response){
        const list = await poolDB.query('SELECT *FROM usuario');
        res.json(list);
    }

    public async auth(req: Request,res: Response,){
        const {usuaUsua, passUsua} = req.body;
        const user = await poolDB.query('SELECT * FROM usuario WHERE usuaUsua = ? and passUsua=?', [usuaUsua, passUsua]);
         console.log(req.params.id);
        const one = user[0];
        if(one){
           res.send('Usuario si existe');
            
            //return res.json(user[0]); 
            
        }else{
            res.status(404).json({text: 'El usuario no existe'});
        }
    }

    // public async comparar(password: string, req: Request, res: Response){
    //     const pass = await poolDB.query('SELECT password FROM usuario WHERE passUsua = ?',[password]);
    //     if(pass){
    //         return pass;
    //     }else{
    //         return res.status(404).json({text: 'Contrasena no coincide'});
    //     }
    // }
    
}

const loginController = new LoginController();
export default loginController;