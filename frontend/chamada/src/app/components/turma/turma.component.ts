import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/core';
import { HttpGenericService } from 'src/app/services/http-generic.service';
import { Course } from 'src/app/models/Course';
import { MessengerService } from 'src/app/services/messenger.service';
import { Aluno } from 'src/app/models/Aluno';
import { StoreService } from 'src/app/services/store.service';
import { CourseService } from 'src/app/services/course-services.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  isLinear = false;
  panelOpenState = false;
  formGroupAdicionar: FormGroup;
  course = new Course();

  constructor(
    private _route: ActivatedRoute,
    private _httpService: HttpGenericService,
    private _storeService: StoreService,
    private _messenger: MessengerService,
    private _courseService: CourseService) { }

  ngOnInit() {
    // const courseId = this._route.snapshot.paramMap.get('id');
    // this._httpService.initialize('course');
    this.course = this._storeService.course;
    // this._httpService.getOne(courseId).subscribe(
    //   courseResponse => {
    //     this.course = courseResponse as Course;
    //     console.log('course', this._storeService.course);
    //   },
    //   error => this._messenger.show('ops! ocorreu algum erro ao buscar a course'));

    // this._courseService.course(courseId).subscribe(result => this.course = result);
  }

  adicionarAlunoNaLista(aluno: Aluno) {
    this.course.alunos.push(aluno);
    this._storeService.course = this.course;
  }

}
