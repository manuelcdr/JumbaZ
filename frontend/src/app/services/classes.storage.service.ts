import { Injectable } from '@angular/core';
import { Attendance, Class } from '../models/Class';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class ClassesStorageService extends StorageService {

  constructor() {
    super('class');
  }

  getByMasterClassId(masterClassId: string) {
    let allModels = this.getAll<Class>();
    let filteredModels = allModels.filter((x) => x.masterClassId == masterClassId);
    return filteredModels;

    allModels.filter
  }

  updateAttendanceList(classId: string, attendanceList: Attendance[]){
    let model = this.getById<Class>(classId);
    model.attendanceList = attendanceList;
    this.update(model);
  }

}
