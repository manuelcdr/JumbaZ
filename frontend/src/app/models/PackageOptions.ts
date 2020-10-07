export class PackageOptions {
  public type: PackType;
  public price: Number;
  public quantity: Number;
}

enum PackType {
  PerDay,
  PerClass
}