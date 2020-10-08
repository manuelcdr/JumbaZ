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
    path: 'masterClasses/:id',
    loadChildren: () => import('./pages/masterClass/masterClass.module').then( m => m.MasterClassPageModule)
  },
  {
    path: 'packages/:id',
    loadChildren: () => import('./pages/package/package.module').then( m => m.PackagePageModule),
  },
  {
    path: 'masterClasses/:masterClassId/classes/:id',
    loadChildren: () => import('./pages/class/class.module').then( m => m.ClassPageModule)
  },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRouting { }
