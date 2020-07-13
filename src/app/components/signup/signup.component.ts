import { Component, OnInit } from '@angular/core';

import {LoginService} from '../../services/login.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User ={
    idPers: 0,
    usuaUsua: '',
    passUsua: '',
    estaUsua: ''
  };

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    
  }

  saveNewUser(){
    //console.log(this.user);
    //this.user.idPers =8;
    delete this.user.idPers;
    this.loginService.saveUser(this.user)
      .subscribe(
        res =>{
          console.log(res);
        },
        err => console.log(err)
      );
  }

}
