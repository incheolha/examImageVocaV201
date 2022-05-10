import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KoreanMSVocaPageRoutingModule } from './korean-ms-voca-routing.module';

import { KoreanMSVocaPage } from './korean-ms-voca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KoreanMSVocaPageRoutingModule
  ],
  declarations: [KoreanMSVocaPage]
})
export class KoreanMSVocaPageModule {}
