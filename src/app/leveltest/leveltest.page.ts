import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { LevelTestMenuModel } from '../model/levelTest.Menu.Model';

import { LevelTestService } from './leveltest.service';
// import { SettingComponent } from './setting/setting.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './leveltest.page.html',
  styleUrls: ['./leveltest.page.scss'],
})
export class LevelTestPage implements OnInit {

  levelTestMenu: LevelTestMenuModel[] = [];

  constructor(private router: Router,
              private modelController: ModalController,
              private levelTestService: LevelTestService) { }

  ngOnInit() {
    this.levelTestMenu = this.levelTestService.getLevelTestMenuData();
  }

  onBackFromDashBoard()  {
  console.log('back to home');

  }

  onDashBoard(item) {
    console.log('setting clicked');
    // this.modelController.create({ component: SettingComponent,
    //                               componentProps: {
    //                                 settingLocation: true
    //                               }
    //                             })
    //                             .then( modelEl => {
    //                               modelEl.present();
    //                             });
  }
}
