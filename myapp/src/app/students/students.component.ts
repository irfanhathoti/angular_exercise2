import { Component, OnInit } from '@angular/core';
import { StudentsService } from './services/students.service';
import { StudentDetails } from './StudentsDetails';
//we have to import the component

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[StudentsService]
})
export class StudentsComponent implements OnInit {
  Students: StudentDetails[]
  SelectBatch:string = "2021"
  batches:string[]

  constructor(private StudenetData:StudentsService) {
    this.batches = ["2020","2021","2022"]
    this.Students = []
  }

  ngOnInit(): void {
    // this.Students = this.StudenetData.getStudents()
  }

}
