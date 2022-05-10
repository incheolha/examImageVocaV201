import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntermediatevocaPageRoutingModule } from './intermediatevoca-routing.module';

import { IntermediatevocaPage } from './intermediatevoca.page';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    IntermediatevocaPageRoutingModule
  ],
  declarations: [IntermediatevocaPage]
})
export class IntermediatevocaPageModule {}
