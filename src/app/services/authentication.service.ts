import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {User} from '../models/User';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_URL = 'http://localhost:3000';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(public http: HttpClient) { 
      // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      // this.currentUser = this.currentUserSubject.asObservable();
  }
  /**
   * ESTA PARA DE LOGIN SERA CON EL SEGUNDO
   */
  login(user: User): Observable<any>{
    return this.http.post(`${this.API_URL}/login`, user);
  }

  // public get currentUserValue(): User{
  //   return this.currentUserSubject.value;
  // }

  // login(username, password){
  //   return this.http.post<any>(`${this.API_URL}/login`, {username, password})
  //     .pipe(map(user => {
  //       localStorage.setItem('currentUser', JSON.stringify(user));
  //       this.currentUserSubject.next(user);
  //       return user;
  //     }));
  // }
  // logout(){
  //   //eliminar el usuario from local storage y asignar usuario actual de nulo
  //   localStorage.removeItem('currentUser');
  //   this.currentUserSubject.next(null);

  // }
}
