export class Shop {
  constructor(
    public id: String,
    public packageId: String,
    public studentId: String,

    public shopDate: Date = new Date(),
    public startDate: Date = new Date(),
    public endDate: Date = null,

    public remainingValue: Number = 0,
    public remainingQuantity: Number = 0,
    public valuePerUnit: Number = 0,
  ) { }
}