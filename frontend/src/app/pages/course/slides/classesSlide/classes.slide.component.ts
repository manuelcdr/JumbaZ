import { Component, Input, OnInit } from '@angular/core';
import { CourseClass } from 'src/app/models/CourseClass';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';

@Component({
  selector: 'app-classes-slide',
  templateUrl: './classes.slide.component.html',
  styleUrls: ['./classes.slide.component.scss'],
})
export class CourseClassesSlideComponent implements OnInit {

  @Input()
  courseId: string;

  models: CourseClass[];

  constructor(private storage: ClassesStorageService) { }

  ngOnInit(): void {
    this.updateSlide();
  }

  public updateSlide(): void {
    this.models = this.storage.getByCourseId(this.courseId);
  }

}
