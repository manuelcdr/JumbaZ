import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentsStorageService } from 'src/app/services/students.storage.service';

@Component({
  selector: 'app-students-slide',
  templateUrl: './students.slide.component.html',
  styleUrls: ['./students.slide.component.scss'],
})
export class StudentsSlideComponent implements OnInit {

  models: Student[];

  constructor(private storage: StudentsStorageService, private router: Router) {
  }

  ngOnInit() {
    this.updateSlide();
  }

  public updateSlide(): void {
    this.models = this.storage.getAll();
  }

}
