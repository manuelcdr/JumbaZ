import { Injectable } from '@angular/core';
import { CourseClass } from '../models/CourseClass';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClassesStorageService extends StorageService {

  constructor() {
    super('classes');
  }

  getByCourseId(courseId: string): CourseClass[] {
    let all = this.getAll() as CourseClass[];
    let models = all.filter(x  => x.courseId == courseId);
    return models;
  }

  updateRegisteredStudents(classId: string, studentsId: string[]) {
    let model = this.getById(classId) as CourseClass;
    model.studentsId = studentsId;
    this.update(model);
  }

}
