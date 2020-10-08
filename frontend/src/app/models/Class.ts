import { Student } from './Student';

export class Class {
  
  public date: Date;
  public dateString: string;
  public timeString: string;
  public attendanceList: Attendance[]

  constructor(public id: string, public masterClassId: string) {
    this.date = new Date();
    this.dateString = this.date.toString();
    this.timeString = this.date.toString();
    this.attendanceList = [];
  }
}

export class Attendance {
  constructor(public studentId: string, public isAttendant: boolean) {}
}