import { Component, OnInit } from '@angular/core';
import { attendenceRadio } from './attendenceRadio';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  attendenceList: attendenceRadio[]
  attendenceData!:any

  constructor() {
    this.attendenceList = [
      new attendenceRadio("24516", "Irfan", "irfan@gmail.com", "present", "28-05-2022"),
      new attendenceRadio("24516", "Irfan", "irfan@gmail.com", "absent", "28-05-2022")
    ]
  }

  ngOnInit(): void {
  }
  attendenceChoice(attendenceData:attendenceRadio):any{
    this.attendenceData = attendenceData.attendence
  }

}
