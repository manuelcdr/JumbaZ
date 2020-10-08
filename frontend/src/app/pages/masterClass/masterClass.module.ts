import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassPageRoutingModule } from './masterClass-routing.module';

import { MasterClassPage } from './masterClass.page';
import { ClassStudentsSlideComponent } from './slides/students/classStudents.slide.component';
import { AttendanceListSlideComponent } from './slides/attendanceLists/attendanceLists.slide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassPageRoutingModule
  ],
  declarations: [MasterClassPage, ClassStudentsSlideComponent, AttendanceListSlideComponent]
})
export class MasterClassPageModule {}
