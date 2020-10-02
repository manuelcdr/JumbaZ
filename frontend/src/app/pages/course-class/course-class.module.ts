import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseClassPageRoutingModule } from './course-class-routing.module';

import { CourseClassPage } from './course-class.page';
import { ClassStudentsSlideComponent } from './slides/students/classStudents.slide.component';
import { AttendanceListSlideComponent } from './slides/attendanceLists/attendanceLists.slide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseClassPageRoutingModule
  ],
  declarations: [CourseClassPage, ClassStudentsSlideComponent, AttendanceListSlideComponent]
})
export class CourseClassPageModule {}
