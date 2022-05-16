
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as DashboardMenu from './../data/dashboard/dashboard.data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


    imageSettingSub= new BehaviorSubject<boolean>(false);
    audioBackgroundSettingSub= new BehaviorSubject<boolean>(false);
    audioSpeedSettingSub= new BehaviorSubject<string>(null);
    audioVolumeSettingSub= new BehaviorSubject<string>('60');
    totalTestInitSub= new BehaviorSubject<boolean>(false);
    toeicTestInitSub= new BehaviorSubject<boolean>(false);
    toeflTestInitSub= new BehaviorSubject<boolean>(false);
    krSatTestInitSub= new BehaviorSubject<boolean>(false);
    hsTestInitSub= new BehaviorSubject<boolean>(false);
    msTestInitSub= new BehaviorSubject<boolean>(false);

  private dashboardMenu = DashboardMenu.DashboardMenu;


  constructor() { }

  getDashboardMenu() {
    return this.dashboardMenu.slice();
  }
}
