import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterClassPage } from './masterClass.page';

const routes: Routes = [
  {
    path: '',
    component: MasterClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassPageRoutingModule {}
