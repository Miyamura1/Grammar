import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KuizPageRoutingModule } from './kuiz-routing.module';

import { KuizPage } from './kuiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KuizPageRoutingModule
  ],
  declarations: [KuizPage]
})
export class KuizPageModule {}
