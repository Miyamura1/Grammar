import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Verbtense2Page } from './verbtense2.page';

const routes: Routes = [
  {
    path: '',
    component: Verbtense2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Verbtense2PageRoutingModule {}
