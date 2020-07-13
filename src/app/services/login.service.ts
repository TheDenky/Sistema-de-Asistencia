import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//para pedir datos

import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URL}/signup`);
  }

  getUser(id: string){
    return this.http.get(`${this.API_URL}/signup/${id}`);
  }

  saveUser(user: User){
    return this.http.post(`${this.API_URL}/signup`, user);
  }

}
