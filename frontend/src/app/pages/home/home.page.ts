import { Component, ViewChild } from '@angular/core';
import { PageWithSlides } from 'src/app/utils/PageWithSlides';
import { ClassesSlideComponent } from './slides/classes/classes.slide.component';
import { PackagesSlideComponent } from './slides/packages/packages.slide.component';
import { StudentsSlideComponent } from './slides/students/students.slide.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends PageWithSlides {

  @ViewChild(PackagesSlideComponent)
  private packagesComponent: PackagesSlideComponent;

  @ViewChild(ClassesSlideComponent)
  private classesComponent: ClassesSlideComponent;

  @ViewChild(StudentsSlideComponent)
  private studentsComponent: StudentsSlideComponent;

  constructor() {
    super(["packages", "classes", "students"]);
  }

  ionViewWillEnter(): void {
    this.packagesComponent.updateSlide();
    this.studentsComponent.updateSlide();
    this.classesComponent.updateSlide();
  }
}
