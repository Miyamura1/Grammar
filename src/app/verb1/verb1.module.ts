import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Verb1PageRoutingModule } from './verb1-routing.module';

import { Verb1Page } from './verb1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Verb1PageRoutingModule
  ],
  declarations: [Verb1Page]
})
export class Verb1PageModule {}
