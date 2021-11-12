import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preposition1Page } from './preposition1.page';

const routes: Routes = [
  {
    path: '',
    component: Preposition1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preposition1PageRoutingModule {}
