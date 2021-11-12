import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PronounsPageRoutingModule } from './pronouns-routing.module';

import { PronounsPage } from './pronouns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PronounsPageRoutingModule
  ],
  declarations: [PronounsPage]
})
export class PronounsPageModule {}
