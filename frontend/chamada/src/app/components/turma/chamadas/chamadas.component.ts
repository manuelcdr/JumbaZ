import { Component, OnInit, Input } from '@angular/core';
import { Turma } from 'src/app/models/Turma';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-chamadas',
  templateUrl: './chamadas.component.html',
  styleUrls: ['./chamadas.component.css']
})
export class ChamadasComponent implements OnInit {

  turma: Turma;

  constructor(private _storeService: StoreService) { }

  ngOnInit() {
    this.turma = this._storeService.turma;
  }

}
