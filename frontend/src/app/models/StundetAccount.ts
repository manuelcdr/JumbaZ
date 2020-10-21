import { Guid } from 'guid-typescript';

export class StudentAccount {
  constructor(
    //StudentId
    public id: string,
    public balance: number = 0,
    public statement: Transaction[] = []) { }


  public static addTransaction(
    $account: StudentAccount,
    value: number,
    description: string,
    classId: string = null,
    purchaseId: string = null) {

    let transaction = new Transaction(Guid.create().toString(), value, $account.balance, description, classId, purchaseId);
    $account.statement.unshift(transaction);
    $account.balance = transaction.balanceAfterTransaction;
  }
}

export class Transaction {

  public balanceAfterTransaction: number = 0;
  public date: Date;

  constructor(
    public id: string,
    public value: number,
    public balanceBeforeTransaction: number,
    public description: string = null,
    public classId: string = null,
    public purchaseId: string = null) {
    this.balanceAfterTransaction = balanceBeforeTransaction + value;
    this.date = new Date();
  }
}