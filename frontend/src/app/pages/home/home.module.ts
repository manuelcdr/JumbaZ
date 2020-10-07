import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PackagesSlideComponent } from './slides/packages/packages.slide.component';
import { StudentsSlideComponent } from './slides/students/students.slide.component';
import { ClassesSlideComponent } from './slides/classes/classes.slide.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PackagesSlideComponent, ClassesSlideComponent, StudentsSlideComponent ]
})
export class HomePageModule {}
