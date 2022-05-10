import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToeicVocaPage } from './toeic-voca.page';


const routes: Routes = [
  {
    path: '',
    component: ToeicVocaPage
  },
  {
    path: 'basicvoca',
    loadChildren: () => import('./basicvoca/basicvoca.module').then( m => m.BasicvocaPageModule)
  },
  {
    path: 'intermediatevoca',
    loadChildren: () => import('./intermediatevoca/intermediatevoca.module').then( m => m.IntermediatevocaPageModule)
  },
  {
    path: 'advancedvoca',
    loadChildren: () => import('./advancedvoca/advancedvoca.module').then( m => m.AdvancedvocaPageModule)
  },
  {
    path: 'actualvoca',
    loadChildren: () => import('./actualvoca/actualvoca.module').then( m => m.ActualvocaPageModule)
  },
  {
    path: 'toeictest',
    loadChildren: () => import('./toeictest/toeictest.module').then( m => m.ToeictestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToeicVocaPageRoutingModule {}
