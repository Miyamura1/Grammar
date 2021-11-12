import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerbPageRoutingModule } from './verb-routing.module';

import { VerbPage } from './verb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerbPageRoutingModule
  ],
  declarations: [VerbPage]
})
export class VerbPageModule {}
