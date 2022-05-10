import { intermediateToeflData } from './intermediateToeic.data';
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { ImageVoca } from '../../model/imageVoca.model';
import * as basicToefl from '../toefl/basicToefl.data';
import * as intermediateToefl from '../toefl/intermediateToefl.data';
import * as advancedToefl from '../toefl/advancedToefl.data';
import * as actualToefl from '../toefl/actualToefl.data';

@Injectable({
  providedIn: 'root'
})
export class ToeflService {

  constructor() {}

 private basicToeflImageVocas: ImageVoca[] = basicToefl.basicToeflData;
 private intermediateToeflImageVocas: ImageVoca[] = intermediateToefl.intermediateToeflData;
 private advancedToeflImageVocas: ImageVoca[] = advancedToefl.advancedToeflData;
 private actualToeflImageVocas: ImageVoca[] = actualToefl.actualToeflData;

//  이미지 보카 복수파일을 가지고 올때
    getBasicToeflImageVocas() {
      return this.basicToeflImageVocas.slice();
    }

    getIntermediateToeflImageVocas() {
      return this.intermediateToeflImageVocas.slice();
    }

    getAdvancedToeflImageVocas() {
      return this.advancedToeflImageVocas.slice();
    }

    getActualToeflImageVocas() {
      return this.actualToeflImageVocas.slice();
    }

// 이미지보카중 1개 특별한 데이타를 가지고 자 할때
     getBasicToeflImageVoca(index: number) {
      return this.basicToeflImageVocas[index];
    }

    getIntermediateToeflImageVoca(index: number) {
      return this.intermediateToeflImageVocas[index];
    }

    getAdvancedToeflImageVoca(index: number) {
      return this.advancedToeflImageVocas[index];
    }

    getActualToeflImageVoca(index: number) {
      return this.actualToeflImageVocas[index];
    }

}
