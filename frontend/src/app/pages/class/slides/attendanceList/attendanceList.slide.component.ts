import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentsStorageService } from 'src/app/services/students.storage.service';
import { MasterClass } from 'src/app/models/MasterClass';
import { MasterClassesStorageService } from 'src/app/services/masterClasses.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { Attendance, Class } from 'src/app/models/Class';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';

@Component({
  selector: 'app-attendance-students-slide',
  templateUrl: './attendanceList.slide.component.html',
  styleUrls: ['./attendanceList.slide.component.scss'],
})
export class AttendanceListSlideComponent implements OnInit {

  @Input()
  _class: Class;

  @Input()
  masterClass: MasterClass;

  @Input()
  students: Student[];

  attendanceList: AttendanceStudent[]


  constructor(
    private storage: ClassesStorageService,
    private toast: ToastService) {
  }

  ngOnInit() {
  }

  generateAttendanceList() {
    if (!this._class.attendanceList) this._class.attendanceList = [];

    this.students.forEach(student => {
      if (this._class.attendanceList.findIndex(x => x.studentId == student.id) < 0) {
        let attendance = new AttendanceStudent(student.id, false, student);
        // this._class.attendanceList.push(attendance);
        this.attendanceList.push(attendance);
      }
    });
  }

  isAttendance(studentId: string){
    return this._class.attendanceList.find(x => x.studentId == studentId).isAttendant;
  }

  changeAttendance(attendanceIndex, studentId) {
    this.storage.updateAttendanceList(this._class.id, this._class.attendanceList);
  }




}

class AttendanceStudent extends Attendance {
  constructor(public studentId: string, public isAttendant: boolean, public student: Student) {
    super(studentId, isAttendant);
  }
}
