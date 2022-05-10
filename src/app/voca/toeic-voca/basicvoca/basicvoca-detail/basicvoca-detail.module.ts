import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { BasicvocaDetailPageRoutingModule } from './basicvoca-detail-routing.module';

import { BasicvocaDetailPage } from './basicvoca-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    BasicvocaDetailPageRoutingModule
  ],
  declarations: [BasicvocaDetailPage]
})
export class BasicvocaDetailPageModule {}
