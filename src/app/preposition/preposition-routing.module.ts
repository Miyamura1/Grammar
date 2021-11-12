import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrepositionPage } from './preposition.page';

const routes: Routes = [
  {
    path: '',
    component: PrepositionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrepositionPageRoutingModule {}
