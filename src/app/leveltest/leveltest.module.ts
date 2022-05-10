import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeveltestPageRoutingModule } from './leveltest-routing.module';

import { LeveltestPage } from './leveltest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeveltestPageRoutingModule
  ],
  declarations: [LeveltestPage]
})
export class LeveltestPageModule {}
