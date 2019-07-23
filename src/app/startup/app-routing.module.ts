import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TurmasComponent } from '../components/turmas/turmas.component';
import { TurmaComponent } from '../components/turma/turma.component';
import { NovaTurmaComponent } from '../components/nova-turma/nova-turma.component';
import { ChamadaComponent } from '../components/turma/chamada/chamada.component';

const routes: Routes = [
  // Site routes goes here
  {
    path: '', component: TurmasComponent,
    children: []
  },
  { path: 'turmas', component: TurmasComponent },
  { path: 'turma/:id', component: TurmaComponent },
  { path: 'nova-turma', component: NovaTurmaComponent},
  { path: 'turma/chamada', component: ChamadaComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
