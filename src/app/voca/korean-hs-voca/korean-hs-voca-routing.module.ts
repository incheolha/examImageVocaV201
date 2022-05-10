import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KoreanHSVocaPage } from './korean-hs-voca.page';

const routes: Routes = [
  {
    path: '',
    component: KoreanHSVocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KoreanHSVocaPageRoutingModule {}
