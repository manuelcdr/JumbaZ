import { Student } from './Student';

export class Class {

  constructor(
    public id: string,
    public masterClassId: string,
    public date: Date = new Date(),
    public dateString: string = date.toString(),
    public timeString: string = date.toString(),
    public attendanceList: Attendance[] = [],
    public closed: boolean = false
  ) { }

}

export class Attendance {
  constructor(
    public studentId: string,
    public isAttendant: boolean,
    public visitor: boolean = false
  ) { }
}