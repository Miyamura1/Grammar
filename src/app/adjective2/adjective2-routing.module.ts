import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adjective2Page } from './adjective2.page';

const routes: Routes = [
  {
    path: '',
    component: Adjective2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adjective2PageRoutingModule {}
