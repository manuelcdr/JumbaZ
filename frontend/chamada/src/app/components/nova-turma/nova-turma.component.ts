import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FloatLabelType } from '@angular/material/core';
import { HttpGenericService } from 'src/app/services/http-generic.service';
import { first } from 'rxjs/operators';
import { MessengerService } from 'src/app/services/messenger.service';

/**
 * @title Stepper vertical
 */
@Component({
  selector: 'nova-course-component',
  templateUrl: 'nova-course.component.html',
  styleUrls: ['nova-course.component.css']
})
export class NovaCourseComponent implements OnInit {
  isLinear = false;
  formGroup: FormGroup;

  @Input()
  floatLabel: FloatLabelType;

  constructor(
    private _formBuilder: FormBuilder,
    private _httpService: HttpGenericService,
    private _messenger: MessengerService) {}

  ngOnInit() {
    this._httpService.initialize('course');

    this.formGroup = this._formBuilder.group({
      nomeCourse: ['', Validators.required]
    });

    this.floatLabel = 'always';
  }

  onSubmit() {

    console.log('submited');

    const novaCourse = {
      nome: this.formGroup.controls.nomeCourse.value
    };

    console.log('novaCourse', novaCourse);

    this._httpService.create(novaCourse)
      .pipe(first())
      .subscribe(
        response => {
          this._messenger.show('course adicionada');
        },
        error => {
          this._messenger.show('ops! ocorreu algum erro');
        });
  }
}
