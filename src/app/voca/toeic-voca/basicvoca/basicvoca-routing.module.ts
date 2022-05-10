import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicvocaPage } from './basicvoca.page';

const routes: Routes = [
  {
    path: '',
    component: BasicvocaPage
  },
  {
    path: ':dayId',
    loadChildren: () => import('./basicvoca-detail/basicvoca-detail.module').then( m => m.BasicvocaDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicvocaPageRoutingModule {}
