import { Injectable } from '@angular/core';
import { ImageVoca } from 'src/app/model/imageVoca.model';
import * as levelInfoData from '../../data/levelInfo/level.info.data';
import * as basicToefl from '../../data/toefl/basicToefl.data';
import * as intermediateToefl from '../../data/toefl/intermediateToefl.data';
import * as advancedToefl from '../../data/toefl/advancedToefl.data';
import * as actualToefl from '../../data/toefl/actualToefl.data';

@Injectable({
  providedIn: 'root'
})
export class ToeflVocaService {
  private levelTitle: string;
  private levelInfos = levelInfoData.ToeflLevelInfoData;
  private basicToeflVocas = basicToefl.basicToeflData;
  private intermediatedToeflVocas = intermediateToefl.intermediateToeflData;
  private advancedToeflVocas = advancedToefl.advancedToeflData;
  private actualToeflVocas = actualToefl.actualToeflData;

  private dailyVocaList: ImageVoca[] = [];

  constructor() { }


  getLevelInfos() {
    return this.levelInfos.slice();
  }
  getBasicToeflVocas() {
    return this.basicToeflVocas.slice();
  }
  getIntermediatedToeflVocas() {
    return this.intermediatedToeflVocas.slice();
  }
  getAdvancedToeflInfos() {
    return this.advancedToeflVocas.slice();
  }
  getActualToeflVocas() {
    return this.actualToeflVocas.slice();
  }


  getLevelToeflTitle(levelId) {
    switch(levelId) {
      case '1': return this.levelTitle = 'Basic Toefl Voca';
      case '2': return this.levelTitle = 'Intermediate Toefl Voca';
      case '3': return this.levelTitle = 'Advanced Toefl Voca';
      case '4': return this.levelTitle = 'Actual Toefl Voca';
      default: break;

    }
  }

  getDayToeflVocas(levelId) {

    switch(levelId) {
      case '1': return this.basicToeflVocas.filter( b => b.chapter === 1);
      case '2': return this.intermediatedToeflVocas.filter( b => b.chapter === 1);
      case '3': return this.advancedToeflVocas.filter( b => b.chapter === 1 );
      case '4': return this.actualToeflVocas.filter( b => b.chapter === 1 );
      default: break;
    }
  }

  getDetailToeflVocas(dayId, levelTypeId) {
    const toeflLevel = '1';
    const toeflDayId = dayId;
    console.log(toeflDayId);

    switch(levelTypeId) {
      case '1': return this.basicToeflVocas.filter( b => b.days === dayId);
      case '2': return this.intermediatedToeflVocas.filter( b => b.days === dayId);
      case '3': return this.advancedToeflVocas.filter( b => b.days === dayId );
      case '4': return this.actualToeflVocas.filter( b => b.days === dayId );
      default: break;

  }
  }
};
