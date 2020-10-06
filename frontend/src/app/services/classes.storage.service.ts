import { Injectable } from '@angular/core';
import { Class } from '../models/Class';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClassesStorageService extends StorageService {

  constructor() {
    super('classes');
  }

  getByPackId(packId: string): Class[] {
    let all = this.getAll() as Class[];
    let models = all.filter(x  => x.packId == packId);
    return models;
  }

  updateRegisteredStudents(classId: string, studentsId: string[]) {
    let model = this.getById(classId) as Class;
    model.studentsId = studentsId;
    this.update(model);
  }

}
