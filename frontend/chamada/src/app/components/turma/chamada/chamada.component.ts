import { Component, OnInit } from '@angular/core';
import { HttpGenericService } from 'src/app/services/http-generic.service';
import { ActivatedRoute } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';
import { Course } from 'src/app/models/Course';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.component.html',
  styleUrls: ['./chamada.component.css']
})
export class ChamadaComponent implements OnInit {

  course: Course;

  constructor(
    private _route: ActivatedRoute,
    private _httpService: HttpGenericService,
    private _storeService: StoreService,
    private _messenger: MessengerService) { }

  ngOnInit() {
    this.course = this._storeService.course;
  }

}
