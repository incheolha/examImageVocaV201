
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Setting } from '../model/setting.model';
import * as DashboardMenu from './../data/dashboard/dashboard.data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  settings: Setting = {
    imageSetting: false,
    audioBackgroundSetting: false,
    swiperSpeedSetting: '300',
    audioVolumeSetting: '60',
    totalTestInitialization: false,
    toeicTestInitialization: false,
    toeflTestInitialization: false,
    krSatTestInitialization: false,
    hsTestInitialization: false,
    msTestInitialization: false,
    autoPlayOn: false
  };

  settingSub = new BehaviorSubject<Setting>(this.settings);

  private dashboardMenu = DashboardMenu.DashboardMenu;


  constructor() { }

  getDashboardMenu() {
    return this.dashboardMenu.slice();
  }
}
