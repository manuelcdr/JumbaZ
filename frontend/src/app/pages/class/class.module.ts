import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceListPageRoutingModule } from './class-routing.module';

import { ClassPage } from './class.page';
import { AttendanceListSlideComponent } from './slides/attendanceList/attendanceList.slide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceListPageRoutingModule
  ],
  declarations: [ClassPage, AttendanceListSlideComponent]
})
export class ClassPageModule {}
