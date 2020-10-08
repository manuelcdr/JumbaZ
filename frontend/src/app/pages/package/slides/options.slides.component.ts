import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Package } from 'src/app/models/Package';
import { PackageOption } from 'src/app/models/PackageOption';
import { PackageOptionsStorageService } from 'src/app/services/packageOptions.storage.service';
import { PackagesStorageService } from 'src/app/services/packages.storage.service';
import { OptionModalComponent } from '../modals/option/option.modal.component';

@Component({
  selector: 'app-options-slides',
  templateUrl: './options.slides.component.html',
  styleUrls: ['./options.slides.component.scss'],
})
export class OptionsSlidesComponent implements OnInit {


  @Input()
  package: Package;

  options: PackageOption[]

  constructor(private modalController: ModalController, private optionsStorage: PackageOptionsStorageService, private storagePackage: PackagesStorageService) { }

  ngOnInit(): void {
    this.updateSlide();
  }

  public updateSlide(): void {
    this.options = this.optionsStorage.getByPackageId(this.package.id);
  }

  public addOption() {
  }

  public removeOption(option: PackageOption, index: number) {
    this.options.splice(index, 1);
    // this.package.optionsId.filter(id => option.id === id)
  }

  // currentModal = null;

  async createModal(option: PackageOption = null) {

    const modal = await this.modalController.create({
      component: OptionModalComponent,
      componentProps: {
        'packageId': this.package.id,
        'model': option,
      }
    });

    await modal.present();
    // this.currentModal = modal;

    modal.onWillDismiss().then(() => {
      this.updateSlide();
    });
  }


}
