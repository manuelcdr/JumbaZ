import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette, MatSnackBar } from '@angular/material';
import { HttpGenericService } from 'src/app/services/http-generic.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { Turma } from 'src/app/models/Turma';
import { TurmaService } from 'src/app/services/turma-services.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmas = new Array<Turma>();

  constructor(
    private _httpService: HttpGenericService,
    private _store: StoreService,
    private _router: Router,
    private _messenger: MessengerService,
    private _turmaService: TurmaService) { }

  ngOnInit() {
    // this._httpService.initialize('turma');
    // this._httpService.list().subscribe(
    //   turmasResponse => this.turmas = turmasResponse,
    //   error => this._messenger.show('ops! ocorreu algum erro ao buscar as turmas')
    // );

    this._turmaService.turmas().subscribe(result => {
      this.turmas = result;
    });
  }

  selecionarTurma(turma: Turma) {
    console.log('turma', turma.id, turma.nome);

    this._turmaService.turma(turma.id).subscribe(
      result => {
        this._store.turma = result;
        console.log('vou navegar');
        this._router.navigate([`/turmas/${turma.nome}`]);
      },
      erro => this._messenger.show('ops! ocorreu um erro ao buscar a turma')
    );

    // this._httpService.getOne(turma.id).subscribe(
    //   responseTurma => { this._store.turma = responseTurma; console.log('response', responseTurma); },
    //   erro => this._messenger.show('ops! ocorreu um erro ao buscar a turma'),
    //   () => this._router.navigate([`/turmas/${turma.nome}`])
    // );
  }

}
