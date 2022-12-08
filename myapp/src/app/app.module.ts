import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentsComponent } from './students/students.component';
import {TableModule} from 'primeng/table';//here we are using table so we have to import tables
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { BatchFilterPipe } from './pipes/batch-filter.pipe';
import { AttendenceComponent } from './attendence/attendence.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {ButtonModule} from 'primeng/button'
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ComponentInteractionPipe } from './component-interaction.pipe';
import { ProjectHistoryComponent } from './Component loading/project-history/project-history.component';
import { EmployeeDataComponent } from './Component loading/employee-data/employee-data.component';
import { EmpSkillComponent } from './Component loading/emp-skill/emp-skill.component';
import { MeterialUiComponent } from './meterial-ui/meterial-ui.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentsComponent,
    BatchFilterPipe,
    AttendenceComponent,
    ParentComponent,
    ChildComponent,
    ComponentInteractionPipe,
    ProjectHistoryComponent,
    EmployeeDataComponent,
    EmpSkillComponent,
    MeterialUiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    DropdownModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
