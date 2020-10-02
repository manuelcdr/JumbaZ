import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { Course } from 'src/app/models/Course';
import { CoursesStorageService } from 'src/app/services/courses.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { CourseClassesSlideComponent } from './slides/classesSlide/classes.slide.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  @ViewChild(IonSlides, {static: true})
  private slides: IonSlides;

  @ViewChild(CourseClassesSlideComponent)
  private classesSlide: CourseClassesSlideComponent;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  segment: string;
  slideOrder = ["course", "classes"];

  _new: boolean;
  _model: Course;

  constructor(private route: ActivatedRoute, private storage: CoursesStorageService, private toast: ToastService) {
    let id = this.route.snapshot.paramMap.get('id');

    if (id == 'new') {
      this.slideOpts.initialSlide = 0;

      this._new = true;
      this._model = new Course();
      this._model.id = Guid.create().toString();
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
      this.toast.presentToast('Course Added!')
    } else {
      this.storage.update(this._model);
      this.toast.presentToast('Course Atualizado!')
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

  ionViewWillEnter():void {
    this.classesSlide.updateSlide();
  }

}
