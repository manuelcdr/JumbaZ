import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FloatLabelType, MatSnackBar } from '@angular/material';
import { HttpGenericService } from 'src/app/services/http-generic.service';
import { Turma } from 'src/app/models/Turma';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {
  isLinear = false;
  panelOpenState = false;
  formGroupAdicionar: FormGroup;
  turma = new Turma();

  @Input()
  floatLabel: FloatLabelType;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpGenericService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const turmaId = this._route.snapshot.paramMap.get('id');

    this._httpService.getOne(turmaId)
      .subscribe(
        turmaResponse => this.turma = turmaResponse as Turma,
        error => this.showMessage('ops! ocorreu algum erro ao buscar a turma'));

    this.formGroupAdicionar = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.floatLabel = 'always';
  }

  public showMessage(message: string) {
    this._snackBar.open(message, '', { duration: 5000 });
  }

}
