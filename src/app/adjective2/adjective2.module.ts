import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adjective2PageRoutingModule } from './adjective2-routing.module';

import { Adjective2Page } from './adjective2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adjective2PageRoutingModule
  ],
  declarations: [Adjective2Page]
})
export class Adjective2PageModule {}
