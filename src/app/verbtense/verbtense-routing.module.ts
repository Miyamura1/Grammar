import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerbtensePage } from './verbtense.page';

const routes: Routes = [
  {
    path: '',
    component: VerbtensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerbtensePageRoutingModule {}
