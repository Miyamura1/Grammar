import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TensePage } from './tense.page';

const routes: Routes = [
  {
    path: '',
    component: TensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TensePageRoutingModule {}
