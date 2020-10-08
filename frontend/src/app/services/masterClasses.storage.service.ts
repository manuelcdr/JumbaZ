import { Injectable } from '@angular/core';
import { MasterClass } from '../models/MasterClass';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MasterClassesStorageService extends StorageService {

  constructor() {
    super('classes');
  }

  public getByPackageId(packageId: string): MasterClass[] {
    let all = this.getAllMasterClass();
    let models = all.filter(x => x.packageId == packageId);
    return models;
  }

  public updateRegisteredStudents(classId: string, studentsId: string[]) {
    let model = this.getById<MasterClass>(classId);
    model.studentsId = studentsId;
    this.update(model);
  }

  public getAllMasterClass(): MasterClass[] {
    return super.getAll<MasterClass>();
  }

}
