import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { CoursesStorageService } from 'src/app/services/courses.storage.service';

@Component({
  selector: 'app-courses-slide',
  templateUrl: './courses.slide.component.html',
  styleUrls: ['./courses.slide.component.scss'],
})
export class CoursesSlideComponent implements OnInit {

  @Output() courseCount = new EventEmitter<number>();

  public courses: Course[];

  constructor(private storage: CoursesStorageService) {}

  ngOnInit(): void {
    this.updateSlide();
  }

  public updateSlide(): void {
    this.courses = this.storage.getAll();
    this.courseCount.emit(this.courses.length);
  }
}