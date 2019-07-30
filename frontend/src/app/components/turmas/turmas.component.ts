import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette, MatSnackBar } from '@angular/material';
import { HttpGenericService } from 'src/app/services/http-generic.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmas: any[];

  constructor(
    private _httpService: HttpGenericService,
    private _messenger: MessengerService) {}

  ngOnInit() {
    this._httpService.initialize('turma');
    this._httpService.list().subscribe(
      turmasResponse => this.turmas = turmasResponse,
      error => this._messenger.showMessage('ops! ocorreu algum erro ao buscar as turmas')
    );
  }

}
