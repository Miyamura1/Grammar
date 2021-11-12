import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pronouns1Page } from './pronouns1.page';

const routes: Routes = [
  {
    path: '',
    component: Pronouns1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pronouns1PageRoutingModule {}
