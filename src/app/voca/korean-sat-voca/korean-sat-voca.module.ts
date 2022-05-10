import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KoreanSatVocaPageRoutingModule } from './korean-sat-voca-routing.module';

import { KoreanSatVocaPage } from './korean-sat-voca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KoreanSatVocaPageRoutingModule
  ],
  declarations: [KoreanSatVocaPage]
})
export class KoreanSatVocaPageModule {}
