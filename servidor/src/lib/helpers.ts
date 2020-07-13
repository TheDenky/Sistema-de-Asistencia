const bcrypt = require('bcryptjs');

// import { isObject } from 'util';

class Helpers{
    
    public async encryptPassword(password: string){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }
    public async matchPassword(password:string, savedPassword:string){
        try {
            await bcrypt.compare(password, savedPassword);
        } catch (e) {
            console.log(e)
        }
    }
}

const helpers = new Helpers();
export default helpers;

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