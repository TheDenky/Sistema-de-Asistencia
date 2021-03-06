import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Personal } from '../models/personal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  
  constructor(private http: HttpClient) { }

  getPersonal(){
    return this.http.get('/api/personal');
  }
  
  getOnePersonal(id: string){
    return this.http.get(`/api/personal/${id}`);
  }
  /**
  savePersonal(personal: Personal){
    return this.http.post(`${this.API_URI}/personal`, personal);
  }
  updatePersonal(id: string, updatedPersonal: Personal): Observable<Personal>{
    return this.http.put(`${this.API_URI}/personal/${id}`, updatedPersonal);
  }
  deletePersonal(id: string){
    return this.http.delete(`${this.API_URI}/personal/${id}`);
  }
   */
}
