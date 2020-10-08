import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { Attendance, Class } from 'src/app/models/Class';
import { MasterClass } from 'src/app/models/MasterClass';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';
import { MasterClassesStorageService } from 'src/app/services/masterClasses.storage.service';
import { StudentsStorageService } from 'src/app/services/students.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { PageWithSlides } from 'src/app/utils/PageWithSlides';
import { AttendanceListSlideComponent } from './slides/attendanceList/attendanceList.slide.component';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage extends PageWithSlides implements OnInit {

  @ViewChild(AttendanceListSlideComponent)
  private attendancesSlide: AttendanceListSlideComponent;

  _new: boolean;
  _model: Class;

  masterClass: MasterClass;

  constructor(
    private route: ActivatedRoute,
    private storage: ClassesStorageService,
    private masterClassStorage: MasterClassesStorageService,
    private studentsStorage: StudentsStorageService,
    private tosat: ToastService) {
      super(["edit", "attendance"]);

    let id = this.route.snapshot.paramMap.get('id');
    let masterClassId = this.route.snapshot.paramMap.get('classId');

    this.masterClass = masterClassStorage.getById(masterClassId);
    // this.masterClass.students = studentsStorage.getByArrayId(this.masterClass.studentsId);
    
    if (id == 'new') {
      this.slideOpts.initialSlide = 0;
      this._new = true;
      this._model = new Class(Guid.create().toString(), masterClassId);
    } else {
      this._new = false;
      this._model = this.storage.getById(id);
    }

  }

  ngOnInit() {
  }

  updateDate() {
    let date2 = new Date(this._model.dateString);
    let time2 = new Date(this._model.timeString);
    let date = new Date(date2.getFullYear(), date2.getMonth(), date2.getDay(), time2.getHours(), time2.getMinutes());
    this._model.date = date;
  }

  save() {
    this.updateDate();
    // this._model.presentStudentsId = this.attendancesSlide.attendanceListStudentsId;

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
