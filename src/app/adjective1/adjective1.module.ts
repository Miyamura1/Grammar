import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adjective1PageRoutingModule } from './adjective1-routing.module';

import { Adjective1Page } from './adjective1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adjective1PageRoutingModule
  ],
  declarations: [Adjective1Page]
})
export class Adjective1PageModule {}
