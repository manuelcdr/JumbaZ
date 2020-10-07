import { Component, Input, OnInit } from '@angular/core';
import { MasterClass } from 'src/app/models/MasterClass';
import { MasterClassesStorageService } from 'src/app/services/masterClasses.storage.service';

@Component({
  selector: 'app-classes-slide',
  templateUrl: './classes.slide.component.html',
  styleUrls: ['./classes.slide.component.scss'],
})
export class ClassesSlideComponent implements OnInit {

  @Input()
  packageId: string;

  models: MasterClass[];

  constructor(private storage: MasterClassesStorageService) { }
  

  ngOnInit(): void {
    this.updateSlide();
  }

  public updateSlide(): void {
    this.models = this.storage.getByPackageId(this.packageId);
  }

}
