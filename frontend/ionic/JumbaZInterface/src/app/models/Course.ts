import { CourseClass } from './CourseClass';
import { Student } from './Student';

export class Course {
  public id: string;
  public name: string;
  public description: string;

  public classesId: string[];
  
  public classes: CourseClass[];
}