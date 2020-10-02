import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseClassPage } from './course-class.page';

const routes: Routes = [
  {
    path: '',
    component: CourseClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseClassPageRoutingModule {}
