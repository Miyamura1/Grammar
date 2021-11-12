import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Verbtense1PageRoutingModule } from './verbtense1-routing.module';

import { Verbtense1Page } from './verbtense1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Verbtense1PageRoutingModule
  ],
  declarations: [Verbtense1Page]
})
export class Verbtense1PageModule {}
