import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerbPage } from './verb.page';

const routes: Routes = [
  {
    path: '',
    component: VerbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerbPageRoutingModule {}
