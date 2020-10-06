import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentsStorageService } from 'src/app/services/students.storage.service';
import { Class } from 'src/app/models/Class';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { Attendance, AttendanceList } from 'src/app/models/AttendanceList';
import { AttendanceListStorageService } from 'src/app/services/attendance.storage.service';

@Component({
  selector: 'app-attendance-students-slide',
  templateUrl: './attendanceStudents.slide.component.html',
  styleUrls: ['./attendanceStudents.slide.component.scss'],
})
export class AttendanceStudentsSlideComponent implements OnInit {

  @Input()
  attendanceList: AttendanceList;

  @Input()
  $class: Class;

  attendanceListStudentsId: string[];
  attendances: Attendance[] = [];

  init = false;

  constructor(
    private storage: AttendanceListStorageService,
    private toast: ToastService) {
  }

  ngOnInit() {
    console.log(this.attendanceList);
    console.log(this.$class);
    console.log(this.attendanceListStudentsId);
    console.log(this.attendances);
    console.log(this.init);

  if (this.attendanceList.presentStudentsId)
    this.attendanceListStudentsId = this.attendanceList.presentStudentsId;
  else
    this.attendanceListStudentsId = [];

  if (!this.init)
    this.generateAttendances();

  this.init = true;
  }

  generateAttendances() {
    this.$class.students.forEach(student => {
      let attendance = new Attendance();
      attendance.studentId = student.id;
      attendance.student = student;
      attendance.isAttendant = this.isAttendance(student.id);
      this.attendances.push(attendance);
    });
  }

  isAttendance(studentId: string) {
    if (!this.$class.studentsId) return false;
    if (!this.attendanceListStudentsId) return false;

    return this.attendanceListStudentsId.includes(studentId);
  }

  changeAttendance(attendanceIndex, studentId) {
    if (!this.init) return;

    if (this.attendances[attendanceIndex].isAttendant) {
      this.attendanceListStudentsId.push(studentId);
      console.log('marcar', this.attendanceListStudentsId)
    } else {
      let presentIndex = this.attendanceListStudentsId.indexOf(studentId);
      this.attendanceListStudentsId.splice(presentIndex, 1);
      console.log('desmarcar', this.attendanceListStudentsId)
    }

    this.storage.updateAttendanceStudents(this.attendanceList.id, this.attendanceListStudentsId);
  }




}
