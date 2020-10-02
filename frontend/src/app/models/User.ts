import { Course } from './Course';
import { Student } from './Student';

export class User {
  public coursesId: string[];
  public studentsId: string[];

  public courses: Course[];
  public students: Student[];
}