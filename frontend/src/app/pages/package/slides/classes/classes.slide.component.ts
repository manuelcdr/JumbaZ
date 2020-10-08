import { Component, Input, OnInit } from '@angular/core';
import { MasterClass } from 'src/app/models/MasterClass';
import { Package } from 'src/app/models/Package';
import { MasterClassesStorageService } from 'src/app/services/masterClasses.storage.service';
import { PackagesStorageService } from 'src/app/services/packages.storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-classes-slide',
  templateUrl: './classes.slide.component.html',
  styleUrls: ['./classes.slide.component.scss'],
})
export class ClassesSlideComponent implements OnInit {

  @Input()
  package: Package;

  checks: MasterClassCheckbox[] = [];

  constructor(
    private storageMasterClass: MasterClassesStorageService,
    private storagePackage: PackagesStorageService,
    private toast: ToastService) { }

  ngOnInit(): void {
    if (!this.package.masterClassesId) this.package.masterClassesId = [];
    this.updateSlide();
  }

  public updateSlide(): void {
    this.checks = [];
    let allMasterClass = this.storageMasterClass.getAllMasterClass();

    allMasterClass.forEach((model) => {
      let isChecked = false;
      if (this.package.masterClassesId && this.package.masterClassesId.includes(model.id)) {
        isChecked = true;
      }
      this.checks.push(new MasterClassCheckbox(model, isChecked))
    })

    console.log('checks', this.checks);
  }

  public changeClasses(checkbox: MasterClassCheckbox) {
    if (checkbox.isChecked) {
      this.package.masterClassesId.push(checkbox.masterClass.id);
    } else {
      let i = this.package.masterClassesId.indexOf(checkbox.masterClass.id);
      this.package.masterClassesId.splice(i, 1);
    }
    this.storagePackage.updateMasterClasses(this.package.id, this.package.masterClassesId);
  }

}


export class MasterClassCheckbox {
  constructor(public masterClass: MasterClass, public isChecked: Boolean) { }
}