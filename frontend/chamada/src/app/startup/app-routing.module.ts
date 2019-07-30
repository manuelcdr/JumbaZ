import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmasComponent } from '../components/turmas/turmas.component';
import { TurmaComponent } from '../components/turma/turma.component';
import { NovaTurmaComponent } from '../components/nova-turma/nova-turma.component';
import { AppComponent } from './app.component';
import { ChamadaComponent } from '../components/turma/chamada/chamada.component';
import { TesteComponent } from '../components/teste/teste.component';

const routes: Routes = [
  // Site routes goes here
  {
    path: '', component: AppComponent,
    children: [
      { path: 'turmas', component: TurmasComponent },
      { path: 'nova-turma', component: NovaTurmaComponent },
      { path: 'turmas/:nome', component: TurmaComponent },
      { path: 'turmas/:nome/chamada', component: ChamadaComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
