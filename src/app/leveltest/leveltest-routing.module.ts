import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeveltestPage } from './leveltest.page';

const routes: Routes = [
  {
    path: '',
    component: LeveltestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeveltestPageRoutingModule {}
