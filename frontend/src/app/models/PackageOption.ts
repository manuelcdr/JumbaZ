export class PackageOption {
  public id: string;
  public packageId: string;
  public type: PackType;
  public price: Number;
  public quantity: Number;
}

enum PackType {
  PerDay,
  PerClass
}