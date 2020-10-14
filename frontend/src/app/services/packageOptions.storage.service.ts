import { Injectable } from '@angular/core';
import { PackageOption } from '../models/PackageOption';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PackageOptionsStorageService extends StorageService<PackageOption> {

  constructor() {
    super('package-options');
  }

  getByPackageId(packageId: string): PackageOption[] {
    let all = this.getAll();
    let models = all.filter(x  => x.packageId == packageId);
    return models;
  }
  

}
