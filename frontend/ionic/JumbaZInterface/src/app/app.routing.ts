import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'students/:id',
    loadChildren: () => import('./pages/student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'courses/:id',
    loadChildren: () => import('./pages/course/course.module').then( m => m.CoursePageModule),
  },
  {
    path: 'courses/:courseId/classes/:id',
    loadChildren: () => import('./pages/course-class/course-class.module').then( m => m.CourseClassPageModule)
  },
  {
    path: 'courses/:courseId/classes/:classId/attendanceList/:id',
    loadChildren: () => import('./pages/attendanceList/attendanceList.module').then( m => m.AttendanceListPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRouting { }
