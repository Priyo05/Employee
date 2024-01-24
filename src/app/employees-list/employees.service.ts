import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends DataService {

  constructor(httpclient: HttpClient) {
    super('http://localhost:3000/employees', httpclient);
   }
}
