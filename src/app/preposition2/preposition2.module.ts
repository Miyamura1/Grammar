import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preposition2PageRoutingModule } from './preposition2-routing.module';

import { Preposition2Page } from './preposition2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preposition2PageRoutingModule
  ],
  declarations: [Preposition2Page]
})
export class Preposition2PageModule {}
