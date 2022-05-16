import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {

  settings: any = {
    imageSetting: false,
    audioBackgroundSetting: false,
    audioSpeedSetting: '보통',
    audioVolumeSetting: '60',
    totalTestInitialization: false,
    toeicTestInitialization: false,
    toeflTestInitialization: false,
    krSatTestInitialization: false,
    hsTestInitialization: false,
    msTestInitialization: false
  };


  constructor(private modalController: ModalController,
              private dashboardService: DashboardService) { }

  ngOnInit() {}

  onCancel() {
    this.modalController.dismiss();
  }

  changeImage(event) {
  console.log(event.detail.checked);
  this.settings.imageSetting = event.detail.checked;
  this.dashboardService.imageSettingSub.next(this.settings.imageSetting);
  }
  changeAudioBackground(event) {
    console.log(event.detail.checked);
    this.settings.audioBackgroundSetting = event.detail.checked;
    this.dashboardService.audioBackgroundSettingSub.next(this.settings.audioBackgroundSetting);
    }

  changeAudioSpeed(event) {
    console.log(event.detail.value);
    this.settings.audioSpeedSetting = event.detail.value;
    this.dashboardService.audioSpeedSettingSub.next(this.settings.audioSpeedSetting);
  }
  changeAudioVolume(event) {
    console.log(event.detail.value);
    this.settings.audioVolumeSetting = event.detail.value;
    this.dashboardService.audioVolumeSettingSub.next(this.settings.audioVolumeSetting);
  }
  changeTotalTest(event) {
    console.log(event.detail.checked);
    this.settings.totalTestInitialization = event.detail.checked;
    this.dashboardService.totalTestInitSub.next(this.settings.totalTestInitialization);
  }
  changeToeicTest(event) {
    console.log(event.detail.checked);
    this.settings.toeicTestInitialization = event.detail.checked;
    this.dashboardService.toeicTestInitSub.next(this.settings.toeicTestInitialization);
  }
  changeToeflTest(event) {
    console.log(event.detail.checked);
    this.settings.toeflTestInitialization = event.detail.checked;
    this.dashboardService.toeflTestInitSub.next(this.settings.toeflTestInitialization);
  }
  changeKrSatTest(event) {
    console.log(event.detail.checked);
    this.settings.krSatTestInitialization = event.detail.checked;
    this.dashboardService.krSatTestInitSub.next(this.settings.krSatTestInitialization);
  }
  changeHsTest(event) {
    console.log(event.detail.checked);
    this.settings.hsTestInitialization = event.detail.checked;
    this.dashboardService.hsTestInitSub.next(this.settings.hsTestInitialization);
  }
  changeMsTest(event) {
    console.log(event.detail.checked);
    this.settings.msTestInitialization = event.detail.checked;
    this.dashboardService.msTestInitSub.next(this.settings.msTestInitialization);
  }
}
