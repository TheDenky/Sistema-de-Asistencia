//configutacion de sevicios
import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import passport from 'passport';
import bodyParser from 'body-parser';
import signupRoutes from './routes/signupRoutes';
import loginRoutes from './routes/loginRoutes';

//difinicion de la clase para el lado del servidor 
class Server{

    public app: Application;
    
    constructor(){
    //inicializa express
        this.app=express();
        //require("./lib/passport");//passport
        this.config();
        this.routes();
    }
    //configurar la propiedad app
    config():void{
        this.app.set('port',process.env.PORT||3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());       //para pedir datos al servidor
        this.app.use(express.json());//aceptar los json del cliente
        this.app.use(express.urlencoded({extended:true}));//para enviar desde un formulario html   
    }
    //difinir las rutas detscl servidor 
    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/signup',signupRoutes);
        this.app.use('/login',loginRoutes);

    }
    //iniciar el servidor
    start():void{
        this.app.listen(this.app.get('port'),()=>{

            console.log("Server on port",this.app.get('port'));
        });
    }
}
//ejcutar la clase
 const server=new Server ();
 server.start();
