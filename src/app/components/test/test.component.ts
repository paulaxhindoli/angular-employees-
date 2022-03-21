import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
selectedEmployee: any = null 

employees :any[]=[
  {
    employeeName : "Emma",
    employeeSurname : "Smith",
    employeeAge: 25,
    employeeSalary: 2000,
    employeePosition : "Developer"
   },
   {
    employeeName : "John",
    employeeSurname : "Doe",
    employeeAge: 28,
    employeeSalary: 2500,
    employeePosition : "Developer"
   },
   {
    employeeName : "Jane",
    employeeSurname : "Smith",
    employeeAge: 27,
    employeeSalary: 2100,
    employeePosition : "Developer"
   },
   {
    employeeName : "Anna",
    employeeSurname : "Delvery",
    employeeAge: 27,
    employeeSalary: 2100,
    employeePosition : "Developer"
   }
 ] 






  constructor() { }

  ngOnInit(): void {
  }
onShow(event: any, data: any){
  this.selectedEmployee = data;
}
}
