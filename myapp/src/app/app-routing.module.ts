import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendenceComponent } from './attendence/attendence.component';
import { ChildComponent } from './child/child.component';
import { EmpSkillComponent } from './Component loading/emp-skill/emp-skill.component';

const routes: Routes = [
  {
    path:'crudApp' ,component:AttendenceComponent
  },
  {
    path:"componentInteraction" ,component:ChildComponent
  },
  {
    path:'employeeSkills',component:EmpSkillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
