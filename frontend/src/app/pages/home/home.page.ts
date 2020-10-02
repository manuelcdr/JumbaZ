import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { CoursesSlideComponent } from './slides/courses/courses.slide.component';
import { StudentsSlideComponent } from './slides/students/students.slide.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  @ViewChild(IonSlides)
  private slides: IonSlides;

  @ViewChild(CoursesSlideComponent)
  private coursesComponent: CoursesSlideComponent;

  @ViewChild(StudentsSlideComponent)
  private studentsComponent: StudentsSlideComponent;

  coursesCount: number = 0;

  segment: string = 'courses';
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() {
    console.log('home');
  }

  updateSlide() {
    if (this.segment == 'courses') {
      this.slides.slideTo(0);
    }

    if (this.segment == 'students') {
      this.slides.slideTo(1);
    }
  }

  updateSegment() {

    this.slides.getActiveIndex().then(index => {
      if (index == 0) {
        this.segment = 'courses';
      }
      if (index == 1) {
        this.segment = 'students';
      }
    });
  }

  ionViewWillEnter():void {
    this.coursesComponent.updateSlide();
    this.studentsComponent.updateSlide();
    this.coursesCount = this.coursesComponent.courses.length;
  }
}
