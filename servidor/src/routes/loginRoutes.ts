import {Router} from 'express';

import loginController from '../Controllers/loginController';

class LoginRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
//https://www.youtube.com/watch?v=qJ5R9WTW0_E
    config(): void{
        this.router.get('/:id',loginController.index);
        this.router.post('/', loginController.auth);
        this.router.get('/', loginController.list);
    }
    
}
//Esta forma exporta todo el modulo
const loginRoutes = new LoginRoutes();
export default loginRoutes.router;