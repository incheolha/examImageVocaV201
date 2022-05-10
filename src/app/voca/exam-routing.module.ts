import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamPage } from './exam.page';

const routes: Routes = [
  {
    path: '',
    component: ExamPage
  },
  {
    path: 'toeic',
    loadChildren: () => import('./toeic-voca/toeic-voca.module').then(m => m.ToeicVocaPageModule)
  },

  {
    path: 'toefl',
    loadChildren: () => import('./toefl-voca/toefl-voca.module').then(m => m.ToeflVocaPageModule)
  },
  {
    path: 'koreanSAT',
    loadChildren: () => import('./korean-sat-voca/korean-sat-voca.module').then(m => m.KoreanSatVocaPageModule)
  },
  {
    path: 'koreanHS',
    loadChildren: () => import('./korean-hs-voca/korean-hs-voca.module').then(m => m.KoreanHSVocaPageModule)
  },
  {
    path: 'koreanMS',
    loadChildren: () => import('./korean-ms-voca/korean-ms-voca.module').then(m => m.KoreanMSVocaPageModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamPageRoutingModule {}
