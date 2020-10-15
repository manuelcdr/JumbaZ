export class PackageOption {
  constructor(
    public id: string,
    public packageId: string,
    public type: OptionType = OptionType.PerClass,
    public price: number = 0,
    public quantity: number = 1
  ) { }
}

export enum OptionType {
  PerDay = "PerDay",
  PerClass = "PerClass"
}