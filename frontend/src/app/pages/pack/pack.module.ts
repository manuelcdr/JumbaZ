import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PackPage } from './pack.page';

import { PackPageRoutingModule } from './pack-routing.module';
import { ClassesSlideComponent } from './slides/classesSlide/classes.slide.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackPageRoutingModule
  ],
  declarations: [PackPage, ClassesSlideComponent]
})
export class PackPageModule {}
