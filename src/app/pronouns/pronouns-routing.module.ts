import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PronounsPage } from './pronouns.page';

const routes: Routes = [
  {
    path: '',
    component: PronounsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PronounsPageRoutingModule {}
