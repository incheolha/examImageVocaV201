import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedvocaPage } from './advancedvoca.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedvocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedvocaPageRoutingModule {}
