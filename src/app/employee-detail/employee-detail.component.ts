import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employees: any = [];

  constructor(private _employeeservice:EmployeeService) { 
    this.employees= this._employeeservice.getemployee();

  }

  ngOnInit(): void {

  }

}
