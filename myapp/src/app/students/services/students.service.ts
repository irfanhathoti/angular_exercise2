import { Injectable } from '@angular/core';
import { StudentDetails } from '../StudentsDetails';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  // Students: StudentDetails[]


  // constructor() { 
  //   this.Students = [
  //     new StudentDetails(2341, "Irfan", "Hathoti", 23, 2021,70000),
  //     new StudentDetails(5461, "Imran", "Hathoti", 21, 2022,66000),
  //     new StudentDetails(5421, "Anand", "Kumar", 22, 2021,67000),
  //     new StudentDetails(5476, "Darshan", "D", 23, 2021,72000),
  //     new StudentDetails(2341, "Sai", "Kiran", 21, 2022,66000),
  //     new StudentDetails(2341, "Rohith", "S", 24, 2020,71000),
  //     new StudentDetails(2341, "Ayyub", "H", 23, 2021,75000),
  //     new StudentDetails(2341, "Madhivanan", "K", 23, 2020,71000),
  //   ]
  // }
  // addStudent(studentDetails:StudentDetails):boolean{
  //   this.Students.push(studentDetails)
  //   return true
  // }
  // getStudents():StudentDetails[]{
  //   return this.Students
  // }

//   getStudent(StudentId:number):StudentDetails{
//     let student = this.Students.find((P) => {return P.RegNo == StudentId;})
//     if(student == undefined)
//      return null
//     else return student
//   }
}
