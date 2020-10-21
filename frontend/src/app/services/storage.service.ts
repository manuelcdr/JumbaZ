export class StorageService<T> {

  constructor(protected key: string) { }

  protected setItem(obj: any, key: string = null) {
    localStorage.setItem(key ?? this.key, JSON.stringify(obj));
  }

  protected getItem(key: string = null): any {
    return JSON.parse(localStorage.getItem(key ?? this.key));
  }

  public search(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[] {
    return this.getAll().filter(predicate);
  }

  // public getById<T>(id: string): T {
  //   const models = this.getAll() as any[];
  //   return models.find(x => x.id === id) as T;
  // }

  public getById(id: string): T {
    const models = this.getAll() as any[];
    return models.find(x => x.id === id);
  }

  public getAll(): T[] {
    return (this.getItem() ?? []) as T[];
  }

  public add(model: T) {
    const models = this.getAll();
    models.push(model);
    this.updateAll(models);
  }

  public updateAll(models: T[]) {
    this.setItem(models);
  }

  public update(updateModel: T) {
    const models = this.getAll() as any[];
    let index = models.findIndex(x => x.id === (updateModel as any).id);
    models.splice(index, 1, updateModel);
    this.updateAll(models);
  }

}
