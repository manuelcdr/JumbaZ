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

  public getById(id: string): StudentAccount {
    const models = super.getAll() as any[];
    let model = models.find(x => x.id === id);
    if (!model) {
      model = new StudentAccount(id, 0, []);
      super.add(model);
    }
    return model;
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

  public addCredit(studentId: string,
    value: number,
    description: string,
    classId: string = null,
    purchaseId: string = null) {
    this.addTransaction(studentId, value, description, classId, purchaseId);
  }

  public addDebit(studentId: string,
    value: number,
    description: string,
    classId: string = null,
    purchaseId: string = null) {
    this.addTransaction(studentId, value * -1, description, classId, purchaseId);
  }
}
