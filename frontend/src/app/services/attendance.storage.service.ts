import { Injectable } from '@angular/core';
import { AttendanceList } from '../models/AttendanceList';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AttendanceListStorageService extends StorageService {

  constructor() {
    super('attendance-list');
  }

  getByClassId(classId: string) {
    let allModels = this.getAll<AttendanceList>();
    let filteredModels = allModels.filter((x) => x.classId == classId);
    return filteredModels;

    allModels.filter
  }

  updateAttendanceStudents(attendanceListId: string, studentsId: string[]){
    let model = this.getById<AttendanceList>(attendanceListId);

    console.log('storage antes', model.presentStudentsId, studentsId);
    model.presentStudentsId = studentsId;

    console.log('storage depois', model.presentStudentsId, studentsId);
    this.update(model);
  }

}
