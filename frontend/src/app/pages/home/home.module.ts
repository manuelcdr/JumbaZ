import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PacksSlideComponent } from './slides/packs/packs.slide.component';
import { StudentsSlideComponent } from './slides/students/students.slide.component';
import { ClassesSlideComponent } from './slides/classes/classes.slide.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PacksSlideComponent, ClassesSlideComponent, StudentsSlideComponent ]
})
export class HomePageModule {}
