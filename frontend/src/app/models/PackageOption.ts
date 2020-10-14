export class PackageOption {
  constructor(
    public id: string,
    public packageId: string,
    public type: OptionType = OptionType.PerClass,
    public price: Number = 0,
    public quantity: Number = 1
  ) { }
}

export enum OptionType {
  PerDay = "PerDay",
  PerClass = "PerClass"
}