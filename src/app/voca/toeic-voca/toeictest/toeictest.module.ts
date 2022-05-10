import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToeictestPageRoutingModule } from './toeictest-routing.module';

import { ToeictestPage } from './toeictest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToeictestPageRoutingModule
  ],
  declarations: [ToeictestPage]
})
export class ToeictestPageModule {}
