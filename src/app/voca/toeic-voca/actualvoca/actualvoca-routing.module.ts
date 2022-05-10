import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualvocaPage } from './actualvoca.page';

const routes: Routes = [
  {
    path: '',
    component: ActualvocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualvocaPageRoutingModule {}
