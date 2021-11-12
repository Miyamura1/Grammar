import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListverbPageRoutingModule } from './listverb-routing.module';

import { ListverbPage } from './listverb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListverbPageRoutingModule
  ],
  declarations: [ListverbPage]
})
export class ListverbPageModule {}
