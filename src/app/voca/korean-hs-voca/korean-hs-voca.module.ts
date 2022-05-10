import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KoreanHSVocaPageRoutingModule } from './korean-hs-voca-routing.module';

import { KoreanHSVocaPage } from './korean-hs-voca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KoreanHSVocaPageRoutingModule
  ],
  declarations: [KoreanHSVocaPage]
})
export class KoreanHSVocaPageModule {}
