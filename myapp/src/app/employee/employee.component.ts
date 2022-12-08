import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  firstName : string ="irfan";
lastName:string="hathoti"

fullname(): string
{
return this.firstName + ""+this.lastName
}

emp:Employee
  constructor() {
    this.emp=new Employee()

   }

  ngOnInit(): void {
  }

}
