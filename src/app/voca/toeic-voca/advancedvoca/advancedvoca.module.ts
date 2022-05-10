import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedvocaPageRoutingModule } from './advancedvoca-routing.module';

import { AdvancedvocaPage } from './advancedvoca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedvocaPageRoutingModule
  ],
  declarations: [AdvancedvocaPage]
})
export class AdvancedvocaPageModule {}
