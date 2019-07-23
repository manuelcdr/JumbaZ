import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// tslint:disable-next-line: max-line-length
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatIconModule, MatListModule, MatDividerModule,
  MatCardModule, MatRippleModule, MatStepperModule,
  MatFormFieldModule, MatInputModule, MatSlideToggleModule,
  MatGridListModule, MatTabsModule, MatDatepickerModule,
  MatNativeDateModule, MatExpansionModule, MatTooltipModule,
  MatSnackBarModule} from '@angular/material';

import { TurmasComponent } from '../components/turmas/turmas.component';
import { AppRoutingModule } from './app-routing.module';
import { TurmaComponent } from '../components/turma/turma.component';
import { NovaTurmaComponent } from '../components/nova-turma/nova-turma.component';
import { ChamadasComponent } from '../components/turma/chamadas/chamadas.component';
import { AlunosComponent } from '../components/turma/alunos/alunos.component';
import { AdicionarAlunosComponent } from '../components/turma/adicionar-alunos/adicionar-alunos.component';
import { ChamadaComponent } from '../components/turma/chamada/chamada.component';

@NgModule({
  declarations: [
    AppComponent,
    TurmasComponent,
    TurmaComponent,
    NovaTurmaComponent,
    ChamadasComponent,
    AlunosComponent,
    AdicionarAlunosComponent,
    ChamadaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
// tslint:disable-next-line: max-line-length
    MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatIconModule, MatListModule, MatDividerModule,
    MatCardModule, MatRippleModule, MatStepperModule,
    MatFormFieldModule, MatInputModule, MatSlideToggleModule,
    MatGridListModule, MatTabsModule, MatDatepickerModule,
    MatNativeDateModule, MatExpansionModule, MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
