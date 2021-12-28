import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

getemployee(){
  return [
    {"id":"001","name":"ARUN","age":"21"},
    {"id":"002","name":"RAVI","age":"21"},
    {"id":"003","name":"VINO","age":"21"}
  ];
}

}
