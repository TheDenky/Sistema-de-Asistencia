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
class LoginController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const seluser = yield database_1.default.query('SELECT *FROM usuario WHERE idPers= ?', [id]);
            res.json(seluser);
            console.log(req.params);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield database_1.default.query('SELECT *FROM usuario');
            res.json(list);
        });
    }
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuaUsua, passUsua } = req.body;
            const user = yield database_1.default.query('SELECT * FROM usuario WHERE usuaUsua = ? and passUsua=?', [usuaUsua, passUsua]);
            console.log(req.params.id);
            const one = user[0];
            if (one) {
                res.send('Usuario si existe');
                //return res.json(user[0]); 
            }
            else {
                res.status(404).json({ text: 'El usuario no existe' });
            }
        });
    }
}
const loginController = new LoginController();
exports.default = loginController;
