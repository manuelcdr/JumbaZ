import { Component, OnInit, Output, AfterViewChecked, EventEmitter, AfterViewInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessengerService } from 'src/app/services/messenger.service';
import { HttpGenericService } from 'src/app/services/http-generic.service';
import { Aluno } from 'src/app/models/Aluno';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-adicionar-alunos',
  templateUrl: './adicionar-alunos.component.html',
  styleUrls: ['./adicionar-alunos.component.css']
})
export class AdicionarAlunosComponent implements OnInit {

  @Input('courseId')
  set courseId(courseId: string) {
    console.log('courseId', courseId);
    this.aluno = new Aluno();
  }

  @Output() adicionarAlunoNaLista = new EventEmitter();

  submitted = false;
  aluno = new Aluno();

  constructor(
    private _httpService: HttpGenericService,
    private _storeService: StoreService,
    private _messenger: MessengerService) { }

  ngOnInit() {
    this._httpService.initialize('aluno');
    this.aluno = new Aluno();
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this._httpService.create(this.aluno).subscribe(
      response => {
        if (response.success) {
          this._messenger.show(`Aluno(a) ${this.aluno.nome} adicionado a course!`);
          this.adicionarAlunoNaLista.emit(response.data as Aluno);
        }
      },
      error => this._messenger.show('ops! ocorreu algum erro ao tentar adicionar o aluno.'),
      () => form.resetForm()
    );
  }

  habilitarLink(checked: boolean) {
    if (checked) {
      this._messenger.show('Link copiado e habilitado para compartilhamento. O link é acessível somente enquanto habilitado');
    }
  }
}
