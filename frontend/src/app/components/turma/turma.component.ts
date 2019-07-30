import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material';
import { HttpGenericService } from 'src/app/services/http-generic.service';
import { Turma } from 'src/app/models/Turma';
import { MessengerService } from 'src/app/services/messenger.service';
import { Aluno } from 'src/app/models/Aluno';

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

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _httpService: HttpGenericService,
    private _messenger: MessengerService) { }

  ngOnInit() {
    const turmaId = this._route.snapshot.paramMap.get('id');

    this._httpService.getOne(turmaId).subscribe(
      turmaResponse => this.turma = turmaResponse as Turma,
      error => this._messenger.showMessage('ops! ocorreu algum erro ao buscar a turma'),
      () => console.log('Turma', this.turma));

    this.formGroupAdicionar = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  adicionarAlunoNaLista(aluno: Aluno) {
    this.turma.alunos.push(aluno);
  }

}
