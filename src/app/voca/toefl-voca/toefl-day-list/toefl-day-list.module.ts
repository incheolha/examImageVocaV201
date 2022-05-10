import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from '../../shared/voca-modal/shared.module';
import { ToeflDayListPageRoutingModule } from './toefl-day-list-routing.module';

import { ToeflDayListPage } from './toefl-day-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    ShareModule,
    ToeflDayListPageRoutingModule
  ],
  declarations: [ToeflDayListPage]
})
export class ToeflDayListPageModule {}
