import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalController.dismiss();
  }
}
