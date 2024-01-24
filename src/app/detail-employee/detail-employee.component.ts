import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';  
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees-list/employees.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.css'
})
export class DetailEmployeeComponent implements OnInit {

  user!: Employee;
  formGroup!: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private employeeService : EmployeesService,
    private formBuilder: FormBuilder
  ) { 
    this.formGroup = this.createForm();
  }

  ngOnInit(): void {
    this.formGroup = this.createForm();
    
    this.disableFormInput();

    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.getUserDetail(id);
    
  }

  getUserDetail(id: any){
    this.employeeService.getById(id)
    .subscribe({
      next: (response) =>{
        this.user = response as  Employee;
        this.formGroup = this.createForm();
        this.disableFormInput();

        console.log(this.formGroup);
      },
      error : (error) =>{
        
        console.log(error);
        
      }
    })
  }

  createForm() {
    return this.formBuilder.group({
      id: [this.user ? this.user.id : '', Validators.required],
      firstName: [this.user ? this.user.firstName : '', Validators.required],
      lastName: [this.user ? this.user.lastName : '', Validators.required],
      email: [this.user ? this.user.email : '', Validators.required],
      username: [this.user ? this.user.username : '', Validators.required],
      birthDate: [this.user ? this.user.birthDate : '', Validators.required],
      basicSalary: [this.user ? this.user.basicSalary : '', Validators.required],
      status: [this.user ? this.user.status : '', Validators.required],
      group: [this.user ? this.user.group : '', Validators.required],
      description: [this.user ? this.user.description : '', Validators.required],
    });
  }
  

  disableFormInput(){
    let disableForm = ['email','username','birthDate','id','basicSalary','status','group','description','firstName','lastName'];
    for (let index = 0; index < disableForm.length; index++) {
      this.formGroup.controls[disableForm[index]].disable();
      
    }
  }

}
