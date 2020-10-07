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

  getByPackageId(packageId: string): MasterClass[] {
    let all = this.getAll<MasterClass>();
    let models = all.filter(x  => x.packageId == packageId);
    return models;
  }

  updateRegisteredStudents(classId: string, studentsId: string[]) {
    let model = this.getById<MasterClass>(classId);
    model.studentsId = studentsId;
    this.update(model);
  }

}
