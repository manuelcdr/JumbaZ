export class Purchase {
  constructor(
    public id: string,
    public packageId: string,
    public optionId: string,
    public studentId: string,

    public shopDate: Date = new Date(),
    public startDate: Date = new Date(),
    public endDate: Date = null,

    public remainingValue: number = 0,
    public remainingQuantity: number = 0,
    public valuePerUnit: number = 0,
  ) { }
}