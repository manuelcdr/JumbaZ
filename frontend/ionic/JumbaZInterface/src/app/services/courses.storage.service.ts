import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStorageService extends StorageService {

  constructor() {
    super('courses');
  }

}
