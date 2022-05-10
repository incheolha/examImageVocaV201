
import { Injectable } from '@angular/core';

import { DashboardMenuModel } from '../model/dashboardMenu.model';
import * as DashboardMenu from './../data/dashboard/dashboard.data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardMenu = DashboardMenu.DashboardMenu;
  constructor() { }

  getDashboardMenu() {
    return this.dashboardMenu.slice();
  }
}
