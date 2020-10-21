import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Student } from '../models/Student';
import { StudentAccount, Transaction } from '../models/StundetAccount';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentAccountStorageService extends StorageService<StudentAccount> {

  constructor() {
    super('studentAccounts');
  }

  public addTransaction(studentId: string,
    value: number,
    description: string,
    classId: string = null,
    purchaseId: string = null) {
      let account = this.getById(studentId);
      console.log('storage', account);
      StudentAccount.addTransaction(account, value, description, classId, purchaseId);
      this.update(account);
    }
}
