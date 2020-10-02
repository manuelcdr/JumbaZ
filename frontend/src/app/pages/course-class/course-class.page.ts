import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides, ToastController } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { CourseClass } from 'src/app/models/CourseClass';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { AttendanceListPage } from '../attendanceList/attendanceList.page';
import { AttendanceListSlideComponent } from './slides/attendanceLists/attendanceLists.slide.component';

@Component({
  selector: 'app-course-class',
  templateUrl: './course-class.page.html',
  styleUrls: ['./course-class.page.scss'],
})
export class CourseClassPage implements OnInit {

  @ViewChild(IonSlides, { static: true })
  private slides: IonSlides;

  @ViewChild(AttendanceListSlideComponent)
  private attendanceListSlide: AttendanceListSlideComponent;

  _new: boolean;
  _model: CourseClass;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  segment: string;

  slideOrder = ["class", "attendanceLists", "students"];

  constructor(private route: ActivatedRoute, private storage: ClassesStorageService, private toast: ToastService) {
    let id = this.route.snapshot.paramMap.get('id');
    let courseId = this.route.snapshot.paramMap.get('courseId');

    if (id == 'new') {

      
      this.slideOpts.initialSlide = 0;

      this._new = true;
      this._model = new CourseClass();
      this._model.id = Guid.create().toString();
      this._model.courseId = courseId;
    } else {
      this._new = false;
      this._model = this.storage.getById(id);
    }
  }

  ngOnInit(): void {
    this.updateSegment();
  }

  save() {
    if (this._new == true) {
      this.storage.add(this._model);
      this._new = false;
      this.toast.presentToast('Class Added!')
    } else {
      this.storage.update(this._model);
      this.toast.presentToast('Class Updated!')
    }
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

  ionViewWillEnter(): void {
    this.attendanceListSlide.updateSlide();
  }

}
