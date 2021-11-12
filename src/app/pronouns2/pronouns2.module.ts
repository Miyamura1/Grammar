import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pronouns2PageRoutingModule } from './pronouns2-routing.module';

import { Pronouns2Page } from './pronouns2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pronouns2PageRoutingModule
  ],
  declarations: [Pronouns2Page]
})
export class Pronouns2PageModule {}
