import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { IsAuthGuard } from './IsAuth.guard';

const routes: Routes = [
  {
    path:'',
    component: NavbarComponent,
    canActivate: [AuthGuard],
    children: [
    {
        path:'',
        component: EmployeesListComponent
    },
    {
      path:'employees',
      component: EmployeesListComponent
    },  
    {
      path:'add-employee',
      component: AddEmployeeComponent
    },
    {
      path:'detail-employee/:id',
      component:DetailEmployeeComponent
    }
  ],
  },
  {
    path:'Login',
    component: LoginComponent,
    canActivate: [IsAuthGuard],
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
