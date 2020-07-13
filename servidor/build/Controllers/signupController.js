"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const helpers_1 = __importDefault(require("../lib/helpers"));
class SignupController {
    // public async index(req: Request, res: Response){
    //     const seluser =await poolDB.query('SELECT *FROM usuario');
    //     res.json(seluser);
    // }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { passUsua } = req.body;
            console.log(req.body);
            //console.log(passUsua);
            const password = yield helpers_1.default.encryptPassword(passUsua);
            const resul = yield database_1.default.query('INSERT INTO usuario(usuaUsua,passUsua,estaUsua) values(?,?,?) ', [req.body.usuaUsua, password, req.params.estaUsua]);
            //const resul=  await poolDB.query('INSERT INTO usuario SET ?',[req.body]);
            console.log(resul);
            res.json({ message: 'Usuario guardado' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oneUser = yield database_1.default.query('SELECT *FROM usuario WHERE idPers= ?', [id]);
            //console.log(req.params.id);
            if (oneUser.length > 0) {
                return res.json(oneUser[0]);
            }
            res.status(404).json({ text: 'El usuario no existe' });
        });
    }
}
const signupController = new SignupController();
exports.default = signupController;
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
