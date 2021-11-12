import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pronouns1PageRoutingModule } from './pronouns1-routing.module';

import { Pronouns1Page } from './pronouns1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pronouns1PageRoutingModule
  ],
  declarations: [Pronouns1Page]
})
export class Pronouns1PageModule {}
