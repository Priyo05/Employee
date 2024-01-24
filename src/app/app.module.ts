import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { EmployeesService } from './employees-list/employees.service';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    DetailEmployeeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
