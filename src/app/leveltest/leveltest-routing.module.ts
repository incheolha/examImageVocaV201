import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelTestPage } from './leveltest.page';

const routes: Routes = [
  {
    path: '',
    component: LevelTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeveltestPageRoutingModule {}
