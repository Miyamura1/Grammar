import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preposition2Page } from './preposition2.page';

const routes: Routes = [
  {
    path: '',
    component: Preposition2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preposition2PageRoutingModule {}
