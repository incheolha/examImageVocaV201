import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToeflDayListPage } from './toefl-day-list.page';

const routes: Routes = [
  {
    path: '',
    component: ToeflDayListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToeflDayListPageRoutingModule {}
