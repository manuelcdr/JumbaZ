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
    let now = new Date();
    let all = this.getAll();
    let models = all.filter(x => {
      let isStudent = x.studentId == studentId;
      if (!x.endDate) return isStudent;
      return isStudent && x.endDate >= now;
    });
    return models;
  }
}
