import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root',
  useValue:""
})
export class DataService {

  constructor(
    private url: string,
    private httpclient: HttpClient
    ) {
      
     }

  getAll() {
    return this.httpclient.get(this.url);
  }

  getById(id: string | number){
    return this.httpclient.get(`${this.url}/${id}`);
  }

  create(body: Employee){
    return this.httpclient.post(this.url, body);
  }

  delete(id: string | number){
    return this.httpclient.delete(`${this.url}/${id}`);
  }



}
