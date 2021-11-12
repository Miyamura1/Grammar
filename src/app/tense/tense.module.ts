import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TensePageRoutingModule } from './tense-routing.module';

import { TensePage } from './tense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TensePageRoutingModule
  ],
  declarations: [TensePage]
})
export class TensePageModule {}
