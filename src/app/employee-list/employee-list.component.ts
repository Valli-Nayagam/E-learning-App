import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees: any = [];
  public arrays: any = [];
  constructor(private _employeeservice: EmployeeService) {
    this.employees = this._employeeservice.getemployee();

  }


  getElements() {
    this.arrays = [
      { name: "Arun", id: "001", age: "21" },
      { name: "Ravi", id: "001", age: "21" },
      { name: "Vino", id: "001", age: "21" }
    ];
    console.log(this.arrays);
  }

  ngOnInit() {
  }

}
