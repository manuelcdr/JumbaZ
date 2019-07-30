import { Injectable } from '@angular/core';
import { Turma } from '../models/Turma';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  get turma(): Turma {
    return this.getObject('current-turma') as Turma;
  }

  set turma(turma: Turma) {
    this.addObject('current-turma', turma);
  }

  private addObject(local: string, objeto: any) {
    localStorage.setItem(local, JSON.stringify(objeto));
  }

  private getObject(local: string): any {
    return JSON.parse(localStorage.getItem(local));
  }
}
