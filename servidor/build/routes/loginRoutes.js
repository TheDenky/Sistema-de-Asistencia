"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = __importDefault(require("../Controllers/loginController"));
class LoginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //https://www.youtube.com/watch?v=qJ5R9WTW0_E
    config() {
        this.router.get('/:id', loginController_1.default.index);
        this.router.post('/', loginController_1.default.auth);
        this.router.get('/', loginController_1.default.list);
    }
}
//Esta forma exporta todo el modulo
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
