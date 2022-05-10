import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicvocaDetailPage } from './basicvoca-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BasicvocaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicvocaDetailPageRoutingModule {}
