import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassPageRoutingModule } from './class-routing.module';

import { ClassPage } from './class.page';
import { ClassStudentsSlideComponent } from './slides/students/classStudents.slide.component';
import { AttendanceListSlideComponent } from './slides/attendanceLists/attendanceLists.slide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassPageRoutingModule
  ],
  declarations: [ClassPage, ClassStudentsSlideComponent, AttendanceListSlideComponent]
})
export class ClassPageModule {}
