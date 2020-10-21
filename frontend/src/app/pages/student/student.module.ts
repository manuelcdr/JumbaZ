import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPageRoutingModule } from './student-routing.module';

import { StudentPage } from './student.page';
import { PackagesSlideComponent } from './slides/packages/packages.slide.component';
import { StudentAccountComponent } from './slides/account/account.slide.component';
import { TransactionModalComponent } from './modals/transaction/transaction.modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPageRoutingModule
  ],
  declarations: [StudentPage, PackagesSlideComponent, StudentAccountComponent, TransactionModalComponent]
})
export class StudentPageModule {}
