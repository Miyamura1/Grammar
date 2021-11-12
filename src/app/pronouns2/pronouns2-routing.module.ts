import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pronouns2Page } from './pronouns2.page';

const routes: Routes = [
  {
    path: '',
    component: Pronouns2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pronouns2PageRoutingModule {}
