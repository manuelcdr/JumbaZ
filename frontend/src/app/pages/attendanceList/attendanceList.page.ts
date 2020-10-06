import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { AttendanceList } from 'src/app/models/AttendanceList';
import { Class } from 'src/app/models/Class';
import { AttendanceListStorageService } from 'src/app/services/attendance.storage.service';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';
import { StudentsStorageService } from 'src/app/services/students.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { AttendanceStudentsSlideComponent } from './slides/students/attendanceStudents.slide.component';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendanceList.page.html',
  styleUrls: ['./attendanceList.page.scss'],
})
export class AttendanceListPage implements OnInit {

  @ViewChild(IonSlides, {static: true})
  private slides: IonSlides;

  @ViewChild(AttendanceStudentsSlideComponent)
  private attendancesSlide: AttendanceStudentsSlideComponent;

  _new: boolean;
  _model: AttendanceList;

  $class: Class;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  segment: string;
  slideOrder = ["edit", "attendanceListStudents"];

  constructor(
    private route: ActivatedRoute,
    private storage: AttendanceListStorageService,
    private classStorage: ClassesStorageService,
    private studentsStorage: StudentsStorageService,
    private tosat: ToastService) {

    let id = this.route.snapshot.paramMap.get('id');
    let packId = this.route.snapshot.paramMap.get('packId');
    let classId = this.route.snapshot.paramMap.get('classId');

    this.$class = classStorage.getById(classId);
    this.$class.students = studentsStorage.getByArrayId(this.$class.studentsId);
    
    if (id == 'new') {
      this.slideOpts.initialSlide = 0;

      this._new = true;
      this._model = new AttendanceList();
      this._model.id = Guid.create().toString();
      this._model.classId = classId;
      this._model.presentStudentsId = [];
      this._model.dateString = new Date().toString();
      this._model.timeString = new Date().toString();
    } else {
      this._new = false;
      this._model = this.storage.getById(id);
    }

  }

  ngOnInit() {
  }


  updateSlide() {
    let index = this.slideOrder.indexOf(this.segment);
    this.slides.slideTo(index);
  }

  updateSegment() {
    this.slides.getActiveIndex().then(index => {
      this.segment = this.slideOrder[index];
    });
  }

  updateDate() {
    let date2 = new Date(this._model.dateString);
    let time2 = new Date(this._model.timeString);
    let date = new Date(date2.getFullYear(), date2.getMonth(), date2.getDay(), time2.getHours(), time2.getMinutes());
    this._model.date = date;
  }

  save() {
    this.updateDate();
    this._model.presentStudentsId = this.attendancesSlide.attendanceListStudentsId;

    if (this._new == true) {
      this.storage.add(this._model);
      this._new = false;
      this.tosat.presentToast('Attendance Set!')
    } else {
      this.storage.update(this._model);
      this.tosat.presentToast('Attendance Set!')
    }
  }



}
