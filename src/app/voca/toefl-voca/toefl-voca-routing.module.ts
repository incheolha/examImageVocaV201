import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToeflVocaPage } from './toefl-voca.page';

const routes: Routes = [
  {
    path: '',
    component: ToeflVocaPage
  },
  {
    path: ':levelId',
    loadChildren: () => import('./toefl-day-list/toefl-day-list.module').then( m => m.ToeflDayListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToeflVocaPageRoutingModule {}
