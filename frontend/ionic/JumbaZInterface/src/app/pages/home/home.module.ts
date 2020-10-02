import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CoursesSlideComponent } from './slides/courses/courses.slide.component';
import { StudentsSlideComponent } from './slides/students/students.slide.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CoursesSlideComponent, StudentsSlideComponent ]
})
export class HomePageModule {}
