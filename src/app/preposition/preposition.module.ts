import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrepositionPageRoutingModule } from './preposition-routing.module';

import { PrepositionPage } from './preposition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrepositionPageRoutingModule
  ],
  declarations: [PrepositionPage]
})
export class PrepositionPageModule {}
