import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Verb2Page } from './verb2.page';

const routes: Routes = [
  {
    path: '',
    component: Verb2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Verb2PageRoutingModule {}
