import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Verbtense2PageRoutingModule } from './verbtense2-routing.module';

import { Verbtense2Page } from './verbtense2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Verbtense2PageRoutingModule
  ],
  declarations: [Verbtense2Page]
})
export class Verbtense2PageModule {}
