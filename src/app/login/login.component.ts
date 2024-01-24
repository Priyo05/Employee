import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  detailForm!: FormGroup;
  errormessageTnC: string | undefined;
  dummyLoginData = [
    { username: 'priyo', password: 'priyo' },
  ];

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.detailForm = this.createForm();

    console.log("ini didalam constructor");
    console.log(this.detailForm.value);
    
   }
   
   createForm() {
     return this.formBuilder.group({
       username: ['',Validators.required], 
       password: ['', Validators.required]
     })
   }

   onSubmit(){
    const value = this.detailForm.getRawValue();

    if (this.detailForm.valid) {
      const isValidUser = this.dummyLoginData.find(user => 
        user.username === value.username && user.password === value.password);

      if (isValidUser) {
        console.log('Login successful!');
        localStorage.setItem('token', 'token');

        setTimeout(() => {
          this.router.navigateByUrl('/');
        });
      } else {
        this.errormessageTnC = 'Invalid username or password';
      }
    } else {
      this.errormessageTnC = 'Please fill in all required fields';
    }
    }
    
}

