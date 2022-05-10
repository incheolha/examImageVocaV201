import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToeictestPage } from './toeictest.page';

const routes: Routes = [
  {
    path: '',
    component: ToeictestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToeictestPageRoutingModule {}
