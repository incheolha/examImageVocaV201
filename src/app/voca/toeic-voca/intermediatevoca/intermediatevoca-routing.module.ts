import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntermediatevocaPage } from './intermediatevoca.page';

const routes: Routes = [
  {
    path: '',
    component: IntermediatevocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntermediatevocaPageRoutingModule {}
