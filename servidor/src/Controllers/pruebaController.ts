import {Request,Response} from 'express';
import pool from '../database';

class PruebaController{
     index (req:Request,res:Response){
     
       
       pool.query('DESCRIIBE usuario');
            res.json('usuario');
          }
          
   }
   const pruebaController=new PruebaController();
   export default pruebaController;