import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceListPageRoutingModule } from './attendanceList-routing.module';

import { AttendanceListPage } from './attendanceList.page';
import { AttendanceStudentsSlideComponent } from './slides/students/attendanceStudents.slide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceListPageRoutingModule
  ],
  declarations: [AttendanceListPage, AttendanceStudentsSlideComponent]
})
export class AttendanceListPageModule {}
