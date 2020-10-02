// import { Injectable } from '@angular/core';
// import { Apollo, QueryRef } from 'apollo-angular';
// import gql from 'graphql-tag';
// import { Course } from '../models/Course';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class GraphService {

//   constructor(private _apollo: Apollo) {
//   }

//   executeQuery(query, variables = {}) {
//     const wQuery = this._apollo.watchQuery<any>({
//       query,
//       variables
//     });

//     return wQuery.valueChanges;
//   }

//   executeMuration(mutation, variables = {}){
//     const mutate = this._apollo.mutate({
//       mutation,
//       variables
//     });

//     return mutate;
//   }
// }
