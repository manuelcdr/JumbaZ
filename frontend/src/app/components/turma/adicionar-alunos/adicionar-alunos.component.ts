import { Component, OnInit, Input, AfterViewChecked, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessengerService } from 'src/app/services/messenger.service';
import { HttpGenericService } from 'src/app/services/http-generic.service';
import { Aluno } from 'src/app/models/Aluno';

@Component({
  selector: 'app-adicionar-alunos',
  templateUrl: './adicionar-alunos.component.html',
  styleUrls: ['./adicionar-alunos.component.css']
})
export class AdicionarAlunosComponent implements OnInit, AfterViewChecked {

  @Input() turmaId: string;
  @Output() adicionarAlunoNaLista = new EventEmitter();

  submitted = false;
  aluno = new Aluno();

  constructor(
    private _httpService: HttpGenericService,
    private _messenger: MessengerService) { }

  ngOnInit() {
    this._httpService.initialize('aluno');
  }

  ngAfterViewChecked(): void {
    if (this.aluno.turmaId === '') {
      this.aluno = new Aluno(this.turmaId);
      console.log('TurmaId', this.turmaId);
      console.log('Aluno', this.aluno);
    }
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this._httpService.create(this.aluno).subscribe(
      response => {
        if (response.success) {
          this._messenger.showMessage(`Aluno(a) ${this.aluno.nome} adicionado a turma!`);
          this.adicionarAlunoNaLista.emit(response.data as Aluno);
        }
      },
      error => this._messenger.showMessage('ops! ocorreu algum erro ao tentar adicionar o aluno.'),
      () => form.resetForm()
    );
  }

  habilitarLink(checked: boolean) {
    if (checked) {
      this._messenger.showMessage('Link copiado e habilitado para compartilhamento. O link é acessível somente enquanto habilitado');
    }
  }
}
