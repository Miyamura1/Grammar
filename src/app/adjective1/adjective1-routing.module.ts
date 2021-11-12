import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adjective1Page } from './adjective1.page';

const routes: Routes = [
  {
    path: '',
    component: Adjective1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adjective1PageRoutingModule {}
