// import passport = require('passport');
// import passportLocal = require('passport-local');
// import {Request, Response, NextFunction} from 'express';
// import { request } from 'http';
// import { use } from 'passport';


// const localStrategy = passportLocal.Strategy;

// const poolDB = require('../database');
// const helpers = require('../lib/helpers');

// // passport.serializeUser<any,any>((user, done) => {
// //     done(undefined, user.id);
// // });

// // passport.deserializeUser((id, done)=>{
    
// // });

// passport.use('local.signin' ,new localStrategy({
//     usernameField: "username"

// },async (username, password, done)=>{
    
//     const newUser = {
//         username: username,
//         password: password
//     };
//     newUser.password = await helpers.encryptPassword(password);

//     const result = await poolDB.query('DESCRIBE usuario');
//     console.log(result);
// }));


