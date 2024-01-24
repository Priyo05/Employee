import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees-list/employees.service';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
  export class AddEmployeeComponent implements OnInit {

    employeeForm!: FormGroup;

    dummyGroups: string[] = [
      'Software Developer',
      'Web Developer',
      'Database Administrator',
      'Network Engineer',
      'System Analyst',
      'IT Consultant',
      'Security Analyst',
      'Data Scientist',
      'UI/UX Designer',
      'IT Manager'
    ];


constructor(
      private employeeService :EmployeesService,
      private router: Router,
      private formBuilder: FormBuilder
      ) 
      {
        this.employeeForm = this.formBuilder.group({
          id: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          birthDate: ['', Validators.required],
          basicSalary: ['', Validators.required],
          status: ['', Validators.required],
          group: ['', Validators.required],
          description: ['', Validators.required],
        });
  }

  ngOnInit(): void {
      
  }

  onSubmit() {
      if (this.employeeForm.valid) {
        
        // const formData = { 
        //   ...this.employeeForm.value 
        // };
        // console.log(formData);
        this.employeeService.create(this.employeeForm.value)
          .subscribe({
            next: (data: any) => {
              this.router.navigate(['/employees']);
            },
            error: (error) => {
              console.log('ini error di create');
              console.log(error);
            }
          });
      }
    }


  markFormGroupTouched(formGroup: FormGroup) {
    formGroup.markAllAsTouched();
  }


  cancelClick(){
    this.router.navigate(['/employees']);
  }

  
  
}
