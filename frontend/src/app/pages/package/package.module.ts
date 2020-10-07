import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PackagePage } from './package.page';

import { PackagePageRoutingModule } from './package-routing.module';
import { ClassesSlideComponent } from './slides/classes/classes.slide.component';
import { OptionsSlidesComponent } from './slides/options.slides.component';
import { OptionModalComponent } from './modals/option/option.modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackagePageRoutingModule
  ],
  declarations: [PackagePage, ClassesSlideComponent, OptionsSlidesComponent, OptionModalComponent]
})
export class PackagePageModule {}
