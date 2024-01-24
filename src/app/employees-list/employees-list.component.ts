import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Subject } from 'rxjs';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';
import { Toast } from 'ngx-toastr';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  employees: Employee[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private router: Router, private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
    this.getData();
  }

  getData(){
    this.employeeService.getAll()
    .subscribe({
      next: (response) => {
        this.employees = response as Employee[];
        console.log(this.employees);
        
        this.dtTrigger.next(null);
      },
      error: (error) => {
        console.log(error);
        
      }
    })
  }

  goToDetail(id: string){
    this.router.navigate(['/detail-employee', id]);
  }
  
  // deleteClick(data: any){
  //   this.employeeService.delete(data.id)
  //   .subscribe({
  //     next: (response: any) => {
  //       let index = this.employees.indexOf(data);
  //       this.employees.splice(index,1);

  //       this.router.navigate(['']);
  //     },
  //     error: (error) => {
  //       console.log(error);
        
  //     }
  //   })
  // }


  showToast(message: string,action: string) {
    const toast = document.querySelector('#customToast');

    if (action === 'edit') {
      toast!.classList.add('bg-warning');
    } else if (action === 'delete') {
      toast!.classList.add('bg-danger');
    }
  
    toast!.classList.add('show');
    toast!.textContent = message;
  
      setTimeout(() => {
        toast!.classList.remove('show');
        toast!.classList.remove('bg-warning');
        toast!.classList.remove('bg-danger');
      }, 3000);
    
  }

  editClick(employee: any) {
    this.showToast('Edit successful for '+ employee.username,'edit');
  }

  deleteClick(employee: any) {
    this.showToast('Delete successful for '+ employee.username,'delete');
  }


}
