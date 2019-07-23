import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FloatLabelType, MatSnackBar } from '@angular/material';
import { HttpGenericService } from 'src/app/services/http-generic.service';
import { first } from 'rxjs/operators';
import { ComponentBase } from '../abstractions/ComponentBase';

/**
 * @title Stepper vertical
 */
@Component({
  selector: 'nova-turma-component',
  templateUrl: 'nova-turma.component.html',
  styleUrls: ['nova-turma.component.css']
})
export class NovaTurmaComponent implements OnInit {
  isLinear = false;
  formGroup: FormGroup;

  @Input()
  floatLabel: FloatLabelType;

  constructor(
    private _formBuilder: FormBuilder,
    private _httpService: HttpGenericService,
    private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this._httpService.initialize('turma');

    this.formGroup = this._formBuilder.group({
      nomeTurma: ['', Validators.required]
    });

    this.floatLabel = 'always';
  }

  onSubmit() {

    console.log('submited');

    const novaTurma = {
      nome: this.formGroup.controls.nomeTurma.value
    };

    console.log('novaTurma', novaTurma);

    this._httpService.create(novaTurma)
      .pipe(first())
      .subscribe(
        response => {
          this.showMessage('turma adicionada');
        },
        error => {
          this.showMessage('ops! ocorreu algum erro');
        });
  }

  public showMessage(message: string) {
    this._snackBar.open(message, '', { duration: 5000 });
  }
}
