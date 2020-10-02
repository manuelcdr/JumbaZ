import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpGenericService } from 'src/app/services/http-generic.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course-services.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = new Array<Course>();

  constructor(
    private _httpService: HttpGenericService,
    private _store: StoreService,
    private _router: Router,
    private _messenger: MessengerService,
    private _courseService: CourseService) { }

  ngOnInit() {
    // this._httpService.initialize('course');
    // this._httpService.list().subscribe(
    //   coursesResponse => this.courses = coursesResponse,
    //   error => this._messenger.show('ops! ocorreu algum erro ao buscar as courses')
    // );

    this._courseService.courses().subscribe(result => {
      this.courses = result;
    });
  }

  selecionarCourse(course: Course) {
    console.log('course', course.id, course.nome);

    this._courseService.course(course.id).subscribe(
      result => {
        this._store.course = result;
        console.log('vou navegar');
        this._router.navigate([`/courses/${course.nome}`]);
      },
      erro => this._messenger.show('ops! ocorreu um erro ao buscar a course')
    );

    // this._httpService.getOne(course.id).subscribe(
    //   responseCourse => { this._store.course = responseCourse; console.log('response', responseCourse); },
    //   erro => this._messenger.show('ops! ocorreu um erro ao buscar a course'),
    //   () => this._router.navigate([`/courses/${course.nome}`])
    // );
  }

}
