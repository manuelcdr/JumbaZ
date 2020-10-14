import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { PackageOption, OptionType } from 'src/app/models/PackageOption';
import { PackageOptionsStorageService } from 'src/app/services/packageOptions.storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-option-modal',
  templateUrl: './option.modal.component.html',
  styleUrls: ['./option.modal.component.scss'],
})
export class OptionModalComponent implements OnInit {

  @Input()
  packageId: string;

  @Input()
  model: PackageOption;

  _new = false;

  constructor(
    private modalController: ModalController,
    private storage: PackageOptionsStorageService,
    private toast: ToastService) {
  }

  ngOnInit() {
    if (!this.model) {
      this.model = new PackageOption(Guid.create().toString(), this.packageId);
      this._new = true;
    }
  }

  async dismissModal() {
    this.modalController.dismiss("z");
  }

  save() {
    if (this._new) {
      this.storage.add(this.model);
      this.toast.presentToast('Option Added!');
    }
    else {
      this.storage.update(this.model);
      this.toast.presentToast('Option Updated!');
    }
  }

}
