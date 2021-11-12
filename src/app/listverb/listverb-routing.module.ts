import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListverbPage } from './listverb.page';

const routes: Routes = [
  {
    path: '',
    component: ListverbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListverbPageRoutingModule {}
