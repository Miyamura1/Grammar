import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerbtensePageRoutingModule } from './verbtense-routing.module';

import { VerbtensePage } from './verbtense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerbtensePageRoutingModule
  ],
  declarations: [VerbtensePage]
})
export class VerbtensePageModule {}
