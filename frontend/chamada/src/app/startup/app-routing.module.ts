import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from '../components/courses/courses.component';
import { CourseComponent } from '../components/course/course.component';
import { NovaCourseComponent } from '../components/nova-course/nova-course.component';
import { AppComponent } from './app.component';
import { ChamadaComponent } from '../components/course/chamada/chamada.component';
import { TesteComponent } from '../components/teste/teste.component';

const routes: Routes = [
  // Site routes goes here
  {
    path: '', component: AppComponent,
    children: [
      { path: 'courses', component: CoursesComponent },
      { path: 'nova-course', component: NovaCourseComponent },
      { path: 'courses/:nome', component: CourseComponent },
      { path: 'courses/:nome/chamada', component: ChamadaComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
