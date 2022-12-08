import { Component, OnInit ,Input} from '@angular/core';
import { StuDetailsService } from '../shared/stu-details.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  student:any
  @Input()
  attendence !:any

  constructor(private studentService:StuDetailsService) { }


  getAllData(){
    this.studentService.getStudentDetails().subscribe(res =>{
      this.student = res
    })
  }


  ngOnInit(): void {
    this.getAllData()
  }

}
