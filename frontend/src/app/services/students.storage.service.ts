import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsStorageService extends StorageService<Student> {

  constructor() {
    super('students');
  }

  public getByArrayId(ids: string[]): Student[] {
    if (!ids) return [];
    
    let allModels = super.getAll();

    let selectedModels = allModels.filter((x) => ids.includes(x.id));
    return selectedModels;
  }

}
