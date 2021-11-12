import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KuizPage } from './kuiz.page';

const routes: Routes = [
  {
    path: '',
    component: KuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KuizPageRoutingModule {}
