import { Injectable } from '@angular/core';
import { Package } from '../models/Package';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PackagesStorageService extends StorageService {

  constructor() {
    super('packages');
  }

  updateMasterClasses(packageId: string, masterClassesId: string[]) {
    let model = this.getById(packageId) as Package;
    model.masterClassesId = masterClassesId;
    this.update(model);
  }

}
