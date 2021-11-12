import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Verbtense1Page } from './verbtense1.page';

const routes: Routes = [
  {
    path: '',
    component: Verbtense1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Verbtense1PageRoutingModule {}
