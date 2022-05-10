import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualvocaPageRoutingModule } from './actualvoca-routing.module';

import { ActualvocaPage } from './actualvoca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualvocaPageRoutingModule
  ],
  declarations: [ActualvocaPage]
})
export class ActualvocaPageModule {}
