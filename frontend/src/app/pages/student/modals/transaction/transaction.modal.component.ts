import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { Transaction } from 'src/app/models/StundetAccount';
import { StudentAccountStorageService } from 'src/app/services/studentAccount.storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction.modal.component.html',
  styleUrls: ['./transaction.modal.component.scss'],
})
export class TransactionModalComponent implements OnInit {

  @Input()
  studentId: string;

  value: number = 0;
  description: string = "";

  constructor(
    private modalController: ModalController,
    private storage: StudentAccountStorageService,
    private toast: ToastService) {
  }

  ngOnInit() {
  }

  async dismissModal() {
    this.modalController.dismiss();
  }

  save() {
    this.storage.addTransaction(this.studentId, this.value, this.description);
    this.toast.presentToast('Transaction Added!');
  }

}