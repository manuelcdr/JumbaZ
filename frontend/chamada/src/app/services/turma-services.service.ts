import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { Turma } from '../models/Turma';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GraphService } from './graph.service';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  // defaultFields = ;

  constructor(private _apollo: Apollo,
    private _graphqlService: GraphService) {
  }


  turmas(fields = '{ id nome detalhes }'): Observable<Turma[]> {
    return this._graphqlService.executeQuery(gql`{ turmas ${fields} }`)
      .pipe(map(result => result.data.turmas));
  }




  turma(id: string, fields = ''): Observable<Turma> {

    if (fields === '') {
      fields = `
      {
        id
        nome
        detalhes
        alunos {
          id
          nome
          email
        }
      }
    `;
    }

    return this._graphqlService.executeQuery(gql`{ turma(id: "${id}") ${fields} }`)
      .pipe(map(result => result.data.turma));
  }

}
