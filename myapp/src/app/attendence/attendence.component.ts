import { Component, OnInit } from '@angular/core';
import { StudentDataService } from './shared/student-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {StudentDetails} from './attendence'

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  formValue!: FormGroup
  students: StudentDetails = new StudentDetails()
  studentList: any;
  showUpdate !:boolean;
  showAdd !:boolean

  constructor(private formBuilder: FormBuilder, private studentDataService: StudentDataService) {
    // this.students = new StudentDetails()
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      RegNo: [''],
      name: [''],
      email: [''],
      attendence: [''],
      date: ['']
    })
    this.getAllData()
  }


  displayModal !: boolean;


  showModalDialog() {
    this.displayModal = true;
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }


  
AddStudent(){
this.showAdd=true
this.showUpdate=false
}

  getAllData() {
    this.studentDataService.getAllData().subscribe(res => {
      this.studentList = res
    })
  }

  poststudents() {
    this.showUpdate =false
    this.students.RegNo = this.formValue.value.RegNo
    this.students.name = this.formValue.value.name;
    this.students.id = this.formValue.value.id;
    this.students.email = this.formValue.value.email
    this.students.attendence = this.formValue.value.attendence
    this.students.date = this.formValue.value.date

    this.studentDataService.postStudents(this.students)
      .subscribe(res => {
        console.log(res)
        this.formValue.reset();
        this.getAllData()
      }, erroe => {
        alert("error")
      })
  }

  deleteStudent(stu:any){
    this.studentDataService.deleteStudent(stu.id)
    .subscribe(res=>{
      console.log(res)
      this.getAllData()
    })
  }
  onEdit(student:any){
    this.showAdd = false
this.showUpdate=true
    this.students.id = student.id
    this.formValue.controls['RegNo'].setValue(student.id)
    this.formValue.controls['name'].setValue(student.name)
    this.formValue.controls['email'].setValue(student.email)
    this.formValue.controls['attendence'].setValue(student.attendence)
    this.formValue.controls['date'].setValue(student.date)
  }

  updateStudent(){
    this.students.RegNo = this.formValue.value.RegNo
    this.students.name = this.formValue.value.name;
    this.students.email = this.formValue.value.email
    this.students.attendence = this.formValue.value.attendence
    this.students.date = this.formValue.value.date

    this.studentDataService.updateStudent(this.students,this.students.id)
    .subscribe(response =>{
      console.log(response)
      this.formValue.reset()

      this.getAllData()

    })

  }

}
