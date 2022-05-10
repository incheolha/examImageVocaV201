/* eslint-disable no-underscore-dangle */
import { LevelInfo } from '../../model/level.model';
import { Injectable } from '@angular/core';
import * as levelInfoData from '../../data/levelInfo/level.info.data';
import * as basicToeic  from '../../data/toeic/basicToeic.data';
import * as intermediateToeic from '../../data/toeic/intermediateToeic.data';
import * as advancedToeic from '../../data/toeic/advancedToeic.data';
import * as actualToeic from '../../data/toeic/actualToeic.data';

@Injectable({
  providedIn: 'root'
})

export class ToeicVocaService {

  private levelTitle: string;
  private levelInfos = levelInfoData.levelInfoData;
  private basicToeicVoca = basicToeic.basicToeicData;
  private intermediateToeicVoca = intermediateToeic.intermediateToeicData;
  private advancedToeicVoca = advancedToeic.advancedToeicData;
  private actualToeicVoca = actualToeic.actualToeicData;


  getLevelInfos() {
    return this.levelInfos.slice();
  }

  getBasicToeicVoca() {
    return this.basicToeicVoca.slice();
  }

  getIntermediateToeicVoca() {
      return this.intermediateToeicVoca.slice();
  }

  getAdvancedToeicVoca() {
    return this.advancedToeicVoca.slice();
  }

  getActualToeicVoca() {
    return this.actualToeicVoca.slice();
  }
  //  this.basicChapterList = this.basicToeicVocas.filter( b => b.chapter === chapterKey );


  getLevelToeflTitle(levelId) {
    switch(levelId) {
      case '1': return this.levelTitle = 'Basic Toefl Voca';
      case '2': return this.levelTitle = 'Intermediate Toefl Voca';
      case '3': return this.levelTitle = 'Advanced Toefl Voca';
      case '4': return this.levelTitle = 'Actual Toefl Voca';
      default: break;

    }
  }

  getDetailVoca(vocaType, daysId) {

    switch(vocaType) {
      case 'basicToeic':
            return this.basicToeicVoca.filter( b => b.days === daysId);
      case 'intermediateToeic':
            return this.intermediateToeicVoca.filter( b => b.days === daysId);
      case 'advancedToeic':
            return this.advancedToeicVoca.filter( b => b.days === daysId);
      case 'actualToeic':
            return this.advancedToeicVoca.filter( b => b.days === daysId);
      default:
              break;
    }
  }

  getDetailToeicVocas(dayId, levelTypeId) {
    const toeflLevel = '1';
    const toeflDayId = dayId;
    console.log(toeflDayId);

    switch(levelTypeId) {
      case '1': return this.basicToeicVoca.filter( b => b.days === dayId);
      case '2': return this.intermediateToeicVoca.filter( b => b.days === dayId);
      case '3': return this.advancedToeicVoca.filter( b => b.days === dayId );
      case '4': return this.actualToeicVoca.filter( b => b.days === dayId );
      default: break;

    }
  }
}
