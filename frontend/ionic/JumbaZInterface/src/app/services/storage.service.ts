export class StorageService {

  constructor(protected key: string) { }

  protected setItem(obj: any, key: string = null) {
    localStorage.setItem(key ?? this.key, JSON.stringify(obj));
  }

  protected getItem(key: string = null): any {
    return JSON.parse(localStorage.getItem(key ?? this.key));
  }

  public search<T>(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[] {
    return this.getAll().filter(predicate);
  }

  public getById(id: string): any {
    const models = this.getAll();
    return models.find(x => x.id === id);
  }

  public getAll(): any[] {
    return (this.getItem() ?? []) as any[];
  }

  public add(model: any) {
    const models = this.getAll();
    models.push(model);
    this.updateAll(models);
  }

  public updateAll(models: any[]) {
    this.setItem(models);
  }

  public update(updateModel: any) {
    const models = this.getAll();
    let index = models.findIndex(x => x.id === updateModel.id);
    models.splice(index, 1, updateModel);
    this.updateAll(models);
  }

}
