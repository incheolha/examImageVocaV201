import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { ToeicVocaPageRoutingModule } from './toeic-voca-routing.module';

import { ToeicVocaPage } from './toeic-voca.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    ToeicVocaPageRoutingModule
  ],
  declarations: [ToeicVocaPage]
})
export class ToeicVocaPageModule {}
