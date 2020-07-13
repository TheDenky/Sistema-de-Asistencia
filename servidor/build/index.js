"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//configutacion de sevicios
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const signupRoutes_1 = __importDefault(require("./routes/signupRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
//difinicion de la clase para el lado del servidor 
class Server {
    constructor() {
        //inicializa express
        this.app = express_1.default();
        //require("./lib/passport");//passport
        this.config();
        this.routes();
    }
    //configurar la propiedad app
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default()); //para pedir datos al servidor
        this.app.use(express_1.default.json()); //aceptar los json del cliente
        this.app.use(express_1.default.urlencoded({ extended: true })); //para enviar desde un formulario html   
    }
    //difinir las rutas detscl servidor 
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/signup', signupRoutes_1.default);
        this.app.use('/login', loginRoutes_1.default);
    }
    //iniciar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port", this.app.get('port'));
        });
    }
}
//ejcutar la clase
const server = new Server();
server.start();
