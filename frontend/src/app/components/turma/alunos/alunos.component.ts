import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  @Input() alunos: Array<Aluno>;

  constructor() { }

  ngOnInit() {
  }

}
