import { Injectable } from '@angular/core';
// import { Apollo, QueryRef } from 'apollo-angular';
// import gql from 'graphql-tag';
import { Course } from '../models/Course';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { GraphService } from './graph.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // defaultFields = ;

  constructor(
    // private _apollo: Apollo,
    // private _graphqlService: GraphService
    ) {
  }


  courses(fields = '{ id nome detalhes }'): Observable<Course[]> {
    return null;
    // return this._graphqlService.executeQuery(gql`{ courses ${fields} }`)
    //   .pipe(map(result => result.data.courses));
  }




  course(id: string, fields = ''): Observable<Course> {

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

    return null;
    // return this._graphqlService.executeQuery(gql`{ course(id: "${id}") ${fields} }`)
    //   .pipe(map(result => result.data.course));
  }

}
