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
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcryptjs');
// import { isObject } from 'util';
class Helpers {
    encryptPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt.genSalt(10);
            const hash = yield bcrypt.hash(password, salt);
            return hash;
        });
    }
    matchPassword(password, savedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield bcrypt.compare(password, savedPassword);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
const helpers = new Helpers();
exports.default = helpers;
// export default class Helpers{
//     // pass:string;
//     // constructor(password: string){
//     //     this.pass = password;
//     // }
//     public async encryptPassword(password: string) {
//         const salt = await bcrypt.genSalt(10);
//         const hash = bcrypt.hash(password, salt);
//         return hash;
//     }
//     public async comparePassword (password: string, savedPassword: string){
//         try {
//             await bcrypt.compare(password, savedPassword);
//         } catch (e) {
//             console.log(e);   
//         }
//     }
// }
//-----------------NOOOOO
// helpers.encryptPassword = async (password: string)=>{
//     const salt = await bcrypt.genSalt(10);
//     const hash = bcrypt.hash(password, salt);
//     return hash;
// };
// module.exports = helpers;
