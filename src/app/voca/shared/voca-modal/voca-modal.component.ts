import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

import { Subscription } from 'rxjs';

import { ToeflVocaService } from '../../toefl-voca/toefl-voca.service';
import { DashboardService } from '../../../dashboard/dashboard.service';

import { ImageVoca } from '../../../model/imageVoca.model';
import { Setting } from '../../../model/setting.model';
import { SettingComponent } from '../../../dashboard/setting/setting.component';

import { Howl, Howler} from 'howler';

// swiper module 등록
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {EffectFade, EffectCoverflow, EffectFlip, Pagination, Navigation, SwiperOptions} from 'swiper';

SwiperCore.use([EffectFade, Pagination, Navigation]);

@Component({
  selector: 'app-voca-modal',
  templateUrl: './voca-modal.component.html',
  styleUrls: ['./voca-modal.component.scss'],
})
export class VocaModalComponent implements OnInit, OnDestroy {

  @ViewChild('swiper') swiper: SwiperComponent;


  @Input() dayId: any;
  @Input() levelTypeId: any;
  @Input() levelTitle: any;

  swiperSpeedSet: number;
  pauseSwiper = false;
  settings: Setting;

  config: SwiperOptions = {
                               autoplay:  {
                                              disableOnInteraction: false
                                           },
                                slidesPerView: 'auto',
                                spaceBetween: 30,
                                pagination: { clickable: true,
                                              dynamicBullets: true },
                                effect: 'coverflow',
                                grabCursor: true
                          };

  touchAllowed = false;
  isFirstIndex = false;

  player: Howl = null;                     // howler audio 초기화
  backgroundPlayer = null;                  // audio background 초기화
  isPlaying = false;
  isBackgroundPlaying = false;
  defaultAudioVolume = 0.5;

  imageVocaAudioFilename = '';

  dailyVocaList: ImageVoca[] = [];

  settingSubScription: Subscription;


  constructor(private toeflVocaService: ToeflVocaService,
              private alertController: AlertController,
              private modalController: ModalController,
              private dashBoardService: DashboardService
              ) { }

  ngOnInit() {

    this.settingSubScription = this.dashBoardService.settingSub
                                                    .subscribe( sets => {
                                                      this.settings = sets;
                                                      console.log('setting has been changed', this.settings);
                                                      this.swiperSpeedSet = +(this.settings.swiperSpeedSetting);
                                                      console.log('Auto Play On:', this.settings.autoPlayOn);
                                                      if(this.settings.autoPlayOn) {
                                                        this.swiper.swiperRef.autoplay.start();
                                                      }
                                                      if(this.settings.imageSetting) {
                                                        console.log('image setting is updated', this.settings.imageSetting);
                                                      } else {
                                                        console.log('image setting is updated', this.settings.imageSetting);
                                                      }

                                                        console.log('audio volume setting is updated', this.settings.audioVolumeSetting);

                                                      if(this.settings.audioBackgroundSetting) {
                                                        console.log('audioBackground is updated', this.settings.audioBackgroundSetting);
                                                        this.onAudioBackgroundStart(this.settings.audioBackgroundSetting);
                                                      } else {
                                                        console.log('image setting is updated', this.settings.imageSetting);
                                                        this.onAudioBackgroundStart(this.settings.audioBackgroundSetting);
                                                      }
                                                    });

    console.log(this.dayId);                               // list에 지정된 날짜
    console.log(this.levelTypeId);                         // 토플 단계
    console.log(this.levelTitle);

    this.dailyVocaList = this.toeflVocaService.getDetailToeflVocas(this.dayId, this.levelTypeId);
    console.log(this.dailyVocaList);
    const imageVocaAudioFileIndex = 0;
    this.onAudioStart(imageVocaAudioFileIndex);
  }

  ngOnDestroy(): void {

    if(this.settingSubScription) {
      this.settingSubScription.unsubscribe();
    }
  }

onCancel() {
    this.modalController.dismiss();
    this.settings.autoPlayOn = false;
    if(this.settings.audioBackgroundSetting) {
      this.backgroundPlayer.stop();
    }
  }

onSetting() {

  // Setting 구성을 호출하는 기능

  console.log('voca modal setting clicked');
  this.swiper.swiperRef.autoplay.stop();
  this.modalController.create(
                      {component: SettingComponent,
                       componentProps: {settingLocation: false}
                      }
                      ).then ( modalElement => {
                          modalElement.present();
                      });


}

onAudioStart(audioFilenameIndex) {

  this.imageVocaAudioFilename = 'assets/imageVoca/mp3/'+this.dailyVocaList[audioFilenameIndex].filename+'.mp3';

  if(this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: this.imageVocaAudioFilename,
      html5: true,
      volume: this.defaultAudioVolume,
      onPlay: () => {
        console.log('On Playing...');
        this.isPlaying = true;
      },
      onend: () => {
        console.log('On end playing...');

      }
    });

    this.player.play();
}

onAudioBackgroundStart(audioBackgroundSetting: boolean) {

  const imageVocaAudioBackgroundFilename = 'assets/imageVoca/backgroundMp3/imagevocaBackGround.mp3';

  if (audioBackgroundSetting) {
                                    if(this.backgroundPlayer) {
                                      this.backgroundPlayer.stop();
                                    }
                                    this.backgroundPlayer = new Howl({
                                      src: imageVocaAudioBackgroundFilename,
                                      html5: true,
                                      volume: '0.01',
                                      onPlay: () => {
                                        console.log('On Background Audio Playing...');
                                        this.isBackgroundPlaying = true;
                                      },
                                      onend: () => {
                                        console.log('On Background Audio end playing...');

                                      }
                                    });

                                    this.backgroundPlayer.play();
                                } else {
                                    if(this.backgroundPlayer) {
                                      this.backgroundPlayer.stop();
                                    }
                                }

}
onSwiper(event) {
  console.log('Event clicked', event);

  console.log('Is this the first index: ', this.isFirstIndex);
  if (this.isFirstIndex) {
    this.isFirstIndex = false;
    this.alertController.create({
      header: 'Warning',
      message: 'Please Click restart',
      buttons: [
        {
          text:'Okay',
          handler: () => {
          }
        }
      ]
    }).then(alertEl => alertEl.present());
  }

}

swiperSlideChanged(event) {
  console.log('swiper page has been changed: ', event[0].activeIndex);
  console.log('current swiper Speed: ', this.swiperSpeedSet);
  this.swiper.swiperRef.params.speed = this.swiperSpeedSet;              //실제 autoplay기능의 delay(speed)값에 영향을 줌
  console.log(this.swiper.swiperRef.params.speed);
  this.defaultAudioVolume = +(this.settings.audioVolumeSetting);
  this.onAudioStart(this.swiper.swiperRef.activeIndex);

}

prev() {
  this.swiper.swiperRef.slidePrev(300);

}
toggleTouch() {
  console.log('toggleTouch', this.touchAllowed);
  this.touchAllowed = !this.touchAllowed;
  this.swiper.swiperRef.allowTouchMove = this.touchAllowed;

}
next() {
  this.swiper.swiperRef.slideNext(300);
}

imageTaps(audioIndexNumber) {
  console.log('swiper page내 voca image tapped..');
  this.onAudioStart(audioIndexNumber);
}

}
