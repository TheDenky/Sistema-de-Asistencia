import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AlertService} from '../../services/alert.service';
import {AuthenticationService} from '../../services/authentication.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm: FormGroup;
  // loading = false;
  // submitted = false;
  // returnUrl: string;
  //Atributos del login
  usuaUsua: string;
  passUsua: string;
  user: User ={
    idPers: 0,
    usuaUsua: '',
    passUsua: '',
    estaUsua: ''
  };

  constructor(
    // private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    // private alertService: AlertService
  ) { 
    // if(this.authenticationService.currentUserValue){
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   usuaUsua: ['', Validators.required],
    //   passUsua: ['', Validators.required]
    // });

    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }
  login(){
    // const user={usuaUsua: this.usuaUsua, passUsua: this.passUsua};
    // this.authenticationService.login(user)
    //   .subscribe( data => {
    //   console.log(data);
    // });
    delete this.user.idPers;
    delete this.user.estaUsua;
    this.authenticationService.login(this.user)
      .subscribe(
        res=>{
          this.router.navigate(['/']);
          //console.log(res)
          //console.log("aceptado")
        },
        err => console.log(err)
      );
    console.log(this.user);
    //console.log(this.user.passUsua);
  }

  // get f(){
  //   return this.loginForm.controls;
  // }

  onSubmit(){
    // this.submitted = true;

    // //eliminar alertas de submit
    // this.alertService.clear();

    // //para aqui el proceso si el for es invalido
    // if (this.loginForm.invalid) {
    //   return;
    // }

    // this.loading = true;
    // this.authenticationService.login(this.f.usuaUsua.value, this.f.passUsua.value)
    //   .pipe(first())
    //   .subscribe(
    //     data =>{
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading == false;
    //     });

  }

}
