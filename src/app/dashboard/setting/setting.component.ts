import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DashboardService } from '../dashboard.service';
import { Setting } from '../../model/setting.model';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {

  @Input() settingLocation: boolean;                  //dashboard로 부터 들어오면 true가 되고 이럴경우 모든 setting이 활성화된다


  settings: Setting = {
    imageSetting: true,
    audioBackgroundSetting: true,
    swiperSpeedSetting: '300',
    audioVolumeSetting: 0.6,
    totalTestInitialization: false,
    toeicTestInitialization: false,
    toeflTestInitialization: false,
    krSatTestInitialization: false,
    hsTestInitialization: false,
    msTestInitialization: false,
    autoPlayOn: false
  };
  constructor(private modalController: ModalController,
              private dashboardService: DashboardService) { }

  ngOnInit() {

    console.log( 'setting from ', this.settingLocation);
    console.log('setting', this.settings);
  }

  onCancel() {
    console.log('vocal modal is dismissed: ');
    this.modalController.dismiss();
    if(this.settingLocation) {
      this.settings.autoPlayOn = false;
    } else {
      this.settings.autoPlayOn = true;
    }
    this.dashboardService.settingSub.next(this.settings);
  }

  changeImage(event) {
  this.settings.imageSetting = event.detail.checked;
  console.log('Image Setting Clicked', event.detail.checked);
  this.dashboardService.settingSub.next(this.settings);
  }
  changeAudioBackground(event) {

    this.settings.audioBackgroundSetting = event.detail.checked;
    console.log(this.settings.audioBackgroundSetting);
    this.dashboardService.settingSub.next(this.settings);

    }

  changeSwiperSpeed(event) {
    this.settings.autoPlayOn = true;
    console.log(event.detail.value);
    if (event.detail.value === 'Very Slow') {
      this.settings.swiperSpeedSetting = '1500';
    }
     else if (event.detail.value === 'Slow') {
      this.settings.swiperSpeedSetting = '800';
    }
    else if (event.detail.value === 'Normal') {
      this.settings.swiperSpeedSetting = '300';
    }
    else if (event.detail.value === 'Fast') {
      this.settings.swiperSpeedSetting = '100';
    }
    else if (event.detail.value === 'Very Fast') {
      this.settings.swiperSpeedSetting = '50';
    }

  }
  changeAudioVolume(event) {
    console.log('audio volume has been clicked:', event.detail.value);
    if (event.detail.value === 0) {
      this.settings.audioVolumeSetting = 0.0;
    }
    if (event.detail.value === 20) {
      this.settings.audioVolumeSetting = 0.2;
    }
    if (event.detail.value === 40) {
      this.settings.audioVolumeSetting = 0.4;
    }
    if (event.detail.value === 60) {
      this.settings.audioVolumeSetting = 0.6;
    }
    if (event.detail.value === 80) {
      this.settings.audioVolumeSetting = 0.8;
    }
    if (event.detail.value === 100) {
      this.settings.audioVolumeSetting = 1.0;
    }
    console.log(this.settings.audioVolumeSetting);
    this.dashboardService.settingSub.next(this.settings);
  }


  changeTotalTest(event) {

    this.settings.totalTestInitialization = event.detail.checked;
    this.dashboardService.settingSub.next(this.settings);
    console.log(this.settings);
  }
  changeToeicTest(event) {

    this.settings.toeicTestInitialization = event.detail.checked;
    this.dashboardService.settingSub.next(this.settings);
    console.log(this.settings);
  }
  changeToeflTest(event) {

    this.settings.toeflTestInitialization = event.detail.checked;
    this.dashboardService.settingSub.next(this.settings);
    console.log(this.settings);
  }
  changeKrSatTest(event) {

    this.settings.krSatTestInitialization = event.detail.checked;
    this.dashboardService.settingSub.next(this.settings);
    console.log(this.settings);
  }
  changeHsTest(event) {

    this.settings.hsTestInitialization = event.detail.checked;
    this.dashboardService.settingSub.next(this.settings);
    console.log(this.settings);
  }
  changeMsTest(event) {

    this.settings.msTestInitialization = event.detail.checked;
    this.dashboardService.settingSub.next(this.settings);
    console.log(this.settings);
  }
}
