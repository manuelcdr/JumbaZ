import { Component, Input, OnInit } from '@angular/core';
import { Class } from 'src/app/models/Class';
import { MasterClass } from 'src/app/models/MasterClass';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';

@Component({
  selector: 'app-attendanceLists-slide',
  templateUrl: './attendanceLists.slide.component.html',
  styleUrls: ['./attendanceLists.slide.component.scss'],
})
export class AttendanceListSlideComponent implements OnInit {

  @Input()
  masterClass: MasterClass;

  public models: Class[];

  constructor(private storage: ClassesStorageService) {}

  ngOnInit(): void {
    this.updateSlide();
  }

  public updateSlide(): void {
    this.models = this.storage.getByMasterClassId(this.masterClass.id);
  }

}
