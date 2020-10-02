import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-chamadas',
  templateUrl: './chamadas.component.html',
  styleUrls: ['./chamadas.component.css']
})
export class ChamadasComponent implements OnInit {

  course: Course;

  constructor(private _storeService: StoreService) { }

  ngOnInit() {
    this.course = this._storeService.course;
  }

}
