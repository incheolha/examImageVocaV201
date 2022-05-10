import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';

import { BasicvocaPageRoutingModule } from './basicvoca-routing.module';

import { BasicvocaPage } from './basicvoca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    BasicvocaPageRoutingModule
  ],
  declarations: [BasicvocaPage]
})
export class BasicvocaPageModule {}
