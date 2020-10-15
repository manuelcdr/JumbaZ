import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Purchase } from '../models/Purchase';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PurchasesStorageService extends StorageService<Purchase> {

  constructor() {
    super('purchases');
  }

  getCurrentPurchasesByStudent(studentId: string): Purchase[] {
    return this.getAll().filter(x => {
      let isStudent = x.studentId == studentId;
      if (!x.endDate) return isStudent;
      return isStudent && x.endDate >= new Date();
    });
  }

  getCurrentPurchasesByPackages(packageIds: string[]): Purchase[] {
    return this.getAll().filter(x => {
      let isPackage = packageIds.includes(x.packageId);
      if (!x.endDate) return isPackage;
      return isPackage && x.endDate >= new Date();
    });
  }

}
