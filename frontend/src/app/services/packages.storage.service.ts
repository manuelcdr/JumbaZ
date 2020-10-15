import { Injectable } from '@angular/core';
import { Package } from '../models/Package';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PackagesStorageService extends StorageService<Package> {

  constructor() {
    super('packages');
  }

  updateMasterClasses(packageId: string, masterClassesId: string[]) {
    let model = super.getById(packageId);
    model.masterClassesId = masterClassesId;
    this.update(model);
  }

  getByMasterClass(masterClassId: string) {
    return this.getAll().filter(x => x.masterClassesId.includes(masterClassId));
  }

}
