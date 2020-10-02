import { AttendanceList } from './AttendanceList';
import { Student } from './Student';

export class CourseClass {
  public id: string;
  public name: string;
  public courseId: string;
  public date: Date;
  public description: string;
  
  public studentsId: string[];
  public attendanceListsId: string[]
  
  public students: Student[];
  public attendanceLists: AttendanceList[];

} 