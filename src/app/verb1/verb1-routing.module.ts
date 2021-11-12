import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Verb1Page } from './verb1.page';

const routes: Routes = [
  {
    path: '',
    component: Verb1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Verb1PageRoutingModule {}
