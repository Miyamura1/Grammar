import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Verb2PageRoutingModule } from './verb2-routing.module';

import { Verb2Page } from './verb2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Verb2PageRoutingModule
  ],
  declarations: [Verb2Page]
})
export class Verb2PageModule {}
