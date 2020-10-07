import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-option-modal',
  templateUrl: './option.modal.component.html',
  styleUrls: ['./option.modal.component.scss'],
})
export class OptionModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  dismissModal() {
    this.modalController.dismiss().then(() => { });
  }


}
