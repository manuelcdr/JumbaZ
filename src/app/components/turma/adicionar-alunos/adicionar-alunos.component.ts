import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FloatLabelType, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-adicionar-alunos',
  templateUrl: './adicionar-alunos.component.html',
  styleUrls: ['./adicionar-alunos.component.css']
})
export class AdicionarAlunosComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;

  nomeAluno = '';

  @Input()
  floatLabel: FloatLabelType;

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.floatLabel = 'always';
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.showMessage(`Aluno(a) ${this.nomeAluno} adicionado a turma!`);
    form.resetForm();
  }

  habilitarLink(checked: boolean) {
    if (checked) {
      this.showMessage('Link copiado e habilitado para compartilhamento. O link é acessível somente enquanto habilitado');
    }
  }

  showMessage(message: string) {
    this._snackBar.open(message, '', { duration: 5000 });
  }
}
