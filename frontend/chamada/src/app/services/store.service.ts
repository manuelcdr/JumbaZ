import { Injectable } from '@angular/core';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  get course(): Course {
    return this.getObject('current-course') as Course;
  }

  set course(course: Course) {
    this.addObject('current-course', course);
  }

  private addObject(local: string, objeto: any) {
    localStorage.setItem(local, JSON.stringify(objeto));
  }

  private getObject(local: string): any {
    return JSON.parse(localStorage.getItem(local));
  }
}
