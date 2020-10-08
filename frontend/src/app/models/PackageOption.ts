export class PackageOption {

  public packageId: string;
  public type: OptionType;
  public price: Number;
  public quantity: Number;

  constructor(public id: string) {}
}

export enum OptionType {
  PerDay = "PerDay",
  PerClass = "PerClass"
}