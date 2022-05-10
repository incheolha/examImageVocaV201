import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SwiperModule } from 'swiper/angular';
import { VocaModalComponent } from './voca-modal.component';


@NgModule({
  declarations: [ VocaModalComponent],
  imports: [CommonModule, IonicModule, ScrollingModule, SwiperModule],
  exports: [VocaModalComponent]
})

export class ShareModule {}
