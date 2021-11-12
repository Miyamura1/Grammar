import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListexercisePageRoutingModule } from './listexercise-routing.module';

import { ListexercisePage } from './listexercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListexercisePageRoutingModule
  ],
  declarations: [ListexercisePage]
})
export class ListexercisePageModule {}
