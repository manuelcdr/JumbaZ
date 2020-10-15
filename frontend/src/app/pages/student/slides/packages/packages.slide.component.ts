import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Package } from 'src/app/models/Package';
import { PackageOption } from 'src/app/models/PackageOption';
import { Purchase } from 'src/app/models/Purchase';
import { Student } from 'src/app/models/Student';
import { AlertButton, AlertService } from 'src/app/services/alert.service';
import { PackageOptionsStorageService } from 'src/app/services/packageOptions.storage.service';
import { PackagesStorageService } from 'src/app/services/packages.storage.service';
import { PurchasesStorageService } from 'src/app/services/purchases.storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-packages-slide',
  templateUrl: './packages.slide.component.html',
  styleUrls: ['./packages.slide.component.scss'],
})
export class PackagesSlideComponent implements OnInit {

  @Input()
  public student: Student;

  public packages: Package[] = [];
  public currentPurchases: Purchase[] = [];

  constructor(
    private packageStorage: PackagesStorageService,
    private optionStorage: PackageOptionsStorageService,
    private purchaseStorage: PurchasesStorageService,
    private alert: AlertService,
    private toast: ToastService) { }

  ngOnInit(): void {
    this.updateSlide();
  }

  public updateSlide(): void {
    let packages = this.packageStorage.getAll();

    packages.forEach((p, i) => {
      let options = this.optionStorage.getByPackageId(p.id);
      Package.addOptions(p, options);
    });

    this.packages = packages;
    this.currentPurchases = this.purchaseStorage.getCurrentPurchasesByStudent(this.student.id);
  }

  askAttachOption(option: PackageOption) {
    let buttons = [
      AlertButton.createCancelButton(),
      AlertButton.createOkButton(undefined, () => { this.atachOption(option); this.updateSlide(); })
    ]
    this.alert.present("Vincular Opção de Pacote", buttons);
  }

  atachOption(option: PackageOption) {
    console.log('atachOption', option);
    console.log('student', this.student);
    let purchase = new Purchase(
      Guid.create().toString(),
      option.packageId,
      option.id,
      this.student.id,
      undefined, undefined, undefined,
      option.price,
      option.quantity,
      option.price / option.quantity
    );

    console.log(purchase);

    this.purchaseStorage.add(purchase);
    this.toast.presentToast("Option Purchased");
  }

  isCurrentOption(optionId: string) {
    return this.currentPurchases.map(x => x.optionId).includes(optionId);
  }

}

