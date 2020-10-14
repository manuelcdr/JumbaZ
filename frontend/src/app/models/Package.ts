export class Package {
  constructor(
    public id: string,
    public name: string = null,
    public description: string = null,

    public allMasterClasses: Boolean = false,
    public masterClassesId: string[] = [],
    public optionsId: string[] = []
  ) { }
}

