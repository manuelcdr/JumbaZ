import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsStorageService extends StorageService {

  constructor() {
    super('students');
  }

  public getByArrayId(ids: string[]): Student[] {
    if (!ids) return [];
    
    let allModels = this.getAll() as Student[];

    let selectedModels = allModels.filter((x) => ids.includes(x.id));
    return selectedModels;
  }

}
