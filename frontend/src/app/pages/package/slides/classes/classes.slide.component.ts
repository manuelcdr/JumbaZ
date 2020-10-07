import { Component, Input, OnInit } from '@angular/core';
import { MasterClass } from 'src/app/models/MasterClass';
import { Package } from 'src/app/models/Package';
import { MasterClassesStorageService } from 'src/app/services/masterClasses.storage.service';
import { PackagesStorageService } from 'src/app/services/packages.storage.service';

@Component({
  selector: 'app-classes-slide',
  templateUrl: './classes.slide.component.html',
  styleUrls: ['./classes.slide.component.scss'],
})
export class ClassesSlideComponent implements OnInit {

  @Input()
  package: Package;

  checks: MasterClassCheckbox[] = [];

  constructor(private storageMasterClass: MasterClassesStorageService, private storagePackage: PackagesStorageService) { }

  ngOnInit(): void {
    this.updateSlide();
  }

  public updateSlide(): void {
    let allMasterClass = this.storageMasterClass.getByPackageId(this.package.id);

    allMasterClass.forEach((model) => {
      let isChecked = this.package.masterClassesId.includes(model.id);
      this.checks.push(new MasterClassCheckbox(model, isChecked))
    })
  }

  public toggleMasterClass(index: number) {
    this.checks[index].isChecked = !this.checks[index].isChecked;
    this.save();
  }

  public save() {
    this.package.masterClassesId = this.checks.filter((x) => x.isChecked).map((x) => x.masterClass.id);
    this.storagePackage.updateMasterClasses(this.package.id, this.package.masterClassesId);
  }

}


export class MasterClassCheckbox {
  constructor(
    public masterClass: MasterClass,
    public isChecked: boolean) {
  }
}