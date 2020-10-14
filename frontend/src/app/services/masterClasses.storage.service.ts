import { Injectable } from '@angular/core';
import { MasterClass } from '../models/MasterClass';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MasterClassesStorageService extends StorageService<MasterClass> {

  constructor() {
    super('masterClasses');
  }

  // public getAllMasterClass(): MasterClass[] {
  //   return super.getAll<MasterClass>();
  // }

}
