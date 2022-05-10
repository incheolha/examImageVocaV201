import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KoreanSatVocaPage } from './korean-sat-voca.page';

const routes: Routes = [
  {
    path: '',
    component: KoreanSatVocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KoreanSatVocaPageRoutingModule {}
