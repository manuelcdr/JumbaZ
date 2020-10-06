import { Component, Input, OnInit } from '@angular/core';
import { Class } from 'src/app/models/Class';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';

@Component({
  selector: 'app-classes-slide',
  templateUrl: './classes.slide.component.html',
  styleUrls: ['./classes.slide.component.scss'],
})
export class ClassesSlideComponent implements OnInit {

  @Input()
  packId: string;

  models: Class[];

  constructor(private storage: ClassesStorageService) { }
  

  ngOnInit(): void {
    this.updateSlide();
  }

  public updateSlide(): void {
    this.models = this.storage.getByPackId(this.packId);
  }

}
