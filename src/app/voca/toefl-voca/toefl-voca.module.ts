import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShareModule } from '../shared/voca-modal/shared.module';

import { IonicModule } from '@ionic/angular';

import { ToeflVocaPageRoutingModule } from './toefl-voca-routing.module';

import { ToeflVocaPage } from './toefl-voca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    ToeflVocaPageRoutingModule
  ],
  declarations: [ToeflVocaPage]
})
export class ToeflVocaPageModule {}
