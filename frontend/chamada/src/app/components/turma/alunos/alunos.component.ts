import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';
import { StoreService } from 'src/app/services/store.service';
import { Turma } from 'src/app/models/Turma';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  @Input() alunos = new Array<Aluno>();

  constructor(private _storeService: StoreService) {
  }

  ngOnInit() {
    console.log(this._storeService.turma.alunos);
  }

}
