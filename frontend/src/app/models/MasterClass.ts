import { AttendanceList } from './AttendanceList';
import { Student } from './Student';

export class MasterClass {
  public id: string;
  public name: string;
  public packageId: string;
  public date: Date;
  public description: string;
  
  public studentsId: string[];
  public attendanceListsId: string[]
  
  public students: Student[];
  public attendanceLists: AttendanceList[];

}