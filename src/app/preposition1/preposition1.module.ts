import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preposition1PageRoutingModule } from './preposition1-routing.module';

import { Preposition1Page } from './preposition1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preposition1PageRoutingModule
  ],
  declarations: [Preposition1Page]
})
export class Preposition1PageModule {}
