import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette, MatSnackBar } from '@angular/material';
import { HttpGenericService } from 'src/app/services/http-generic.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmas: any[];

  @Input()
  color: ThemePalette;

  constructor(
    private _httpService: HttpGenericService,
    private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this._httpService.initialize('turma');
    this._httpService.list().subscribe(
      turmasResponse => this.turmas = turmasResponse,
      error => this.showMessage('ops! ocorreu algum erro ao buscar as turmas')
    );
  }

  public showMessage(message: string) {
    this._snackBar.open(message, '', { duration: 5000 });
  }

}
