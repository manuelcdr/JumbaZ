import { Injectable } from '@angular/core';
import { Attendance, Class } from '../models/Class';
import { MasterClass } from '../models/MasterClass';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class ClassesStorageService extends StorageService<Class> {

  constructor() {
    super('classes');
  }

  getByMasterClassId(masterClassId: string) {
    let allModels = this.getAll();
    let filteredModels = allModels.filter((x) => x.masterClassId == masterClassId);
    return filteredModels;
  }

  updateAttendanceList(classId: string, attendanceList: Attendance[]){
    let model = this.getById(classId);
    model.attendanceList = attendanceList;
    this.update(model);
  }

}
