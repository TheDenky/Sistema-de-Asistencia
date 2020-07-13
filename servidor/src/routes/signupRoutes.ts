import {Router} from 'express';

import signupController from '../Controllers/signupController';

class SignupRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/',signupController.index);
        this.router.get('/:id',signupController.getOne);
        this.router.post('/', signupController.createUser);
        
    }
}
//Esta forma exporta todo el modulo
const signupRoutes = new SignupRoutes();
export default signupRoutes.router;