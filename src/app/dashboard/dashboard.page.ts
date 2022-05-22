import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import * as DashboardMenu from '../data/dashboard/dashboard.data';
import { DashboardMenuModel } from '../model/dashboardMenu.model';

import { DashboardService } from './dashboard.service';
import { SettingComponent } from './setting/setting.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  dashboardMenu: DashboardMenuModel[] = [];

  constructor(private router: Router,
              private modelController: ModalController,
              private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardMenu = this.dashboardService.getDashboardMenu();
  }

  onBackFromDashBoard()  {
  console.log('back to home');

  }

  onDashBoard(item) {
    console.log('setting clicked');
    this.modelController.create({ component: SettingComponent,
                                  componentProps: {
                                    settingLocation: true
                                  }
                                })
                                .then( modelEl => {
                                  modelEl.present();
                                });
  }
}
