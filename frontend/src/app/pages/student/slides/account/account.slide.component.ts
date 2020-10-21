import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Student } from 'src/app/models/Student';
import { StudentAccount } from 'src/app/models/StundetAccount';
import { StudentAccountStorageService } from 'src/app/services/studentAccount.storage.service';
import { TransactionModalComponent } from '../../modals/transaction/transaction.modal.component';

@Component({
  selector: 'app-account-slide',
  templateUrl: './account.slide.component.html',
  styleUrls: ['./account.slide.component.scss'],
})
export class StudentAccountComponent implements OnInit {


  @Input()
  public student: Student;

  public studentAccount: StudentAccount;

  constructor(
    private accountStorage: StudentAccountStorageService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.updateSlide();
  }

  public updateSlide(): void {
    this.studentAccount = this.accountStorage.getById(this.student.id);
  }

  async createModal() {
    
    const modal = await this.modalController.create({
      component: TransactionModalComponent,
      componentProps: {
        'studentId': this.student.id
      }
    });

    await modal.present();

    modal.onWillDismiss().then(() => {
      this.updateSlide();
    });
  }

}
