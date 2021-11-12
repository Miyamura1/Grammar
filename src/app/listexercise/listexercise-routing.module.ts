import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListexercisePage } from './listexercise.page';

const routes: Routes = [
  {
    path: '',
    component: ListexercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListexercisePageRoutingModule {}
