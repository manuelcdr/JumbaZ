export class StudentAccount {
  constructor(
    public studentId: string,
    public balance: number = 0,
    public statement: Transaction[] = []) { }
}

export class Transaction {
  constructor(
    public id: string,
    public classId: string,
    public value: number,
    public shopId: string = null) {
  }
}