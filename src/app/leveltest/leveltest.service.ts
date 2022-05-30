/* eslint-disable @typescript-eslint/member-ordering */

import { Injectable } from '@angular/core';
import * as LevelTestMenu  from './../data/levelTest/levelTest.Menu.data';
@Injectable({
  providedIn: 'root'
})
export class LevelTestService {

  constructor() { }


  private levelTestMenu = LevelTestMenu.LevelTestMenu;


  getLevelTestMenuData() {
    return this.levelTestMenu.slice();
  }


}
