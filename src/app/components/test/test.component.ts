import { Component, OnInit } from '@angular/core';

type Employee = {
  employeeName: string;
  employeeSurname: string;
  employeeAge: number;
  employeeSalary: number;
  employeePosition: string;
};

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  selectedEmployee: Employee | null = null;

  employees: Employee[] = [
    {
      employeeName: 'Emma',
      employeeSurname: 'Smith',
      employeeAge: 25,
      employeeSalary: 2000,
      employeePosition: 'Developer',
    },
    {
      employeeName: 'John',
      employeeSurname: 'Doe',
      employeeAge: 28,
      employeeSalary: 2500,
      employeePosition: 'Developer',
    },
    {
      employeeName: 'Jane',
      employeeSurname: 'Smith',
      employeeAge: 27,
      employeeSalary: 2100,
      employeePosition: 'Developer',
    },
    {
      employeeName: 'Anna',
      employeeSurname: 'Delvery',
      employeeAge: 27,
      employeeSalary: 2100,
      employeePosition: 'Developer',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  onShow(event: Event, element: Employee) {
    this.selectedEmployee = element;

    setTimeout(() => {
      this.selectedEmployee = null;
    }, 2000);
  }
}
