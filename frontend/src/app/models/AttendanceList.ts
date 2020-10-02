import { Time } from '@angular/common';
import { Student } from './Student';

export class AttendanceList {
  public id: string;
  public classId: string;
  public date: Date;
  public dateString: string;
  public timeString: string;
  public presentStudentsId: string[]
}

export class Attendance {
  public studentId: string;
  public isAttendant: boolean;
  public student: Student;
}