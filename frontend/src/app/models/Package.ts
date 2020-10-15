import { PackageOption } from './PackageOption';

export class Package {
  constructor(
    public id: string,
    public name: string = null,
    public description: string = null,

    public allMasterClasses: Boolean = false,
    public masterClassesId: string[] = [],
    public optionsId: string[] = [],

    public options: PackageOption[] = []
  ) { }

  public static addOptions($package: Package, options: PackageOption[]) {
    if (!$package.options) $package.options = [];

    options.forEach((o, i) => {
      $package.options.push(o);
    });
  }

}

