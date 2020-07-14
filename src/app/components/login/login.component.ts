import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User ={
    idPers: 0,
    usuaUsua: '',
    passUsua: '',
    tipoUsua: '',
    estaUsua: ''
  };

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }
  public auth(){
    delete this.user.idPers;
    delete this.user.tipoUsua;
    delete this.user.estaUsua;
    this.loginService.comprobarLogin(this.user).subscribe(
      res=>{
        console.log("Logueado satisfactorio")
      },
      err => console.log(err)
    );
    console.log(this.user);
  }
}
