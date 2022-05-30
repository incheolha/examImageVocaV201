import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeveltestPageRoutingModule } from './leveltest-routing.module';

import { LevelTestPage } from './leveltest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeveltestPageRoutingModule
  ],
  declarations: [LevelTestPage]
})
export class LeveltestPageModule {}
