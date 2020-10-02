import { Component, Input, OnInit } from '@angular/core';
import { AttendanceList } from 'src/app/models/AttendanceList';
import { CourseClass } from 'src/app/models/CourseClass';
import { AttendanceListStorageService } from 'src/app/services/attendance.storage.service';

@Component({
  selector: 'app-attendanceLists-slide',
  templateUrl: './attendanceLists.slide.component.html',
  styleUrls: ['./attendanceLists.slide.component.scss'],
})
export class AttendanceListSlideComponent implements OnInit {

  @Input()
  courseClass: CourseClass;

  public models: AttendanceList[];

  constructor(private storage: AttendanceListStorageService) {}

  ngOnInit(): void {
    this.updateSlide();
  }

  public updateSlide(): void {
    this.models = this.storage.getByClassId(this.courseClass.id);
  }

}
