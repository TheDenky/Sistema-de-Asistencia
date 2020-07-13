"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signupController_1 = __importDefault(require("../Controllers/signupController"));
class SignupRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/',signupController.index);
        this.router.get('/:id', signupController_1.default.getOne);
        this.router.post('/', signupController_1.default.createUser);
    }
}
//Esta forma exporta todo el modulo
const signupRoutes = new SignupRoutes();
exports.default = signupRoutes.router;
