import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// tslint:disable-next-line: max-line-length
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CoursesComponent } from '../components/courses/courses.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseComponent } from '../components/course/course.component';
import { NovaCourseComponent } from '../components/nova-course/nova-course.component';
import { ChamadasComponent } from '../components/course/chamadas/chamadas.component';
import { AlunosComponent } from '../components/course/alunos/alunos.component';
import { AdicionarAlunosComponent } from '../components/course/adicionar-alunos/adicionar-alunos.component';
import { ChamadaComponent } from '../components/course/chamada/chamada.component';
import { TesteComponent } from '../components/teste/teste.component';
// import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    NovaCourseComponent,
    ChamadasComponent,
    AlunosComponent,
    AdicionarAlunosComponent,
    ChamadaComponent,
    TesteComponent
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
    MatSnackBarModule, MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
