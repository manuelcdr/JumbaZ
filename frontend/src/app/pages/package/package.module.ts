import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PackagePage } from './package.page';

import { PackagePageRoutingModule } from './package-routing.module';
import { ClassesSlideComponent } from './slides/classesSlide/classes.slide.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackagePageRoutingModule
  ],
  declarations: [PackagePage, ClassesSlideComponent]
})
export class PackagePageModule {}
