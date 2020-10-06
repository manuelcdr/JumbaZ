import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PageWithSlides } from 'src/app/utils/PageWithSlides';
import { PacksSlideComponent } from './slides/packs/packs.slide.component';
import { StudentsSlideComponent } from './slides/students/students.slide.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends PageWithSlides {

  @ViewChild(PacksSlideComponent)
  private packsComponent: PacksSlideComponent;

  @ViewChild(StudentsSlideComponent)
  private studentsComponent: StudentsSlideComponent;

  packsCount: number = 0;

  constructor() {
    super(["packs", "classes", "students"]);
  }


  ionViewWillEnter(): void {
    this.packsComponent.updateSlide();
    this.studentsComponent.updateSlide();
    this.packsCount = this.packsComponent.packs.length;
  }
}
