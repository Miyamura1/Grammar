import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Essay1PageRoutingModule } from './essay1-routing.module';

import { Essay1Page } from './essay1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Essay1PageRoutingModule
  ],
  declarations: [Essay1Page]
})
export class Essay1PageModule {}
