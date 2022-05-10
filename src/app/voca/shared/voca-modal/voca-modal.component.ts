import { Component, OnInit, Input, ViewChild, AfterContentChecked } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ToeflVocaService } from '../../toefl-voca/toefl-voca.service';
import { Router } from '@angular/router';
import { ImageVoca } from '../../../model/imageVoca.model';
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
export class VocaModalComponent implements OnInit {

  @ViewChild('swiper') swiper: SwiperComponent;


  @Input() dayId: any;
  @Input() levelTypeId: any;
  @Input() levelTitle: any;


  config: SwiperOptions = {
    autoplay: {
      delay: 2500,
  //    disableOnInteraction: false
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

  player: Howl = null;                                       // howler audio 초기화
  isPlaying = false;

  imageVocaAudioFilename = '';

  dailyVocaList: ImageVoca[] = [];



  constructor(private toeflVocaService: ToeflVocaService,
              private alertController: AlertController,
              private modelController: ModalController) { }

  ngOnInit() {
       //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('this is after view initialized...');
    console.log(this.dayId);                               // list에 지정된 날짜
    console.log(this.levelTypeId);                         // 토플 단계
    console.log(this.levelTitle);
    this.dailyVocaList = this.toeflVocaService.getDetailToeflVocas(this.dayId, this.levelTypeId);
    console.log(this.dailyVocaList);
    const imageVocaAudioFileIndex = 0;
    this.onAudioStart(imageVocaAudioFileIndex);
  }


onCancel() {
    this.modelController.dismiss();
  }

onAudioStart(audioFilenameIndex) {

  this.imageVocaAudioFilename = 'assets/imageVoca/mp3/'+this.dailyVocaList[audioFilenameIndex].filename+'.mp3';

  if(this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: this.imageVocaAudioFilename,
      html5: true,
      volume: 0.5,
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

onSwiper(event) {
  console.log('event clicked', event);

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
  console.log(this.swiper.swiperRef.activeIndex);
  console.log(event[0].activeIndex);

  this.onAudioStart(this.swiper.swiperRef.activeIndex);

}

prev() {
  this.swiper.swiperRef.slidePrev(500);

}
toggleTouch() {
  console.log('toggoleTouch', this.touchAllowed);
  this.touchAllowed = !this.touchAllowed;
  this.swiper.swiperRef.allowTouchMove = this.touchAllowed;
  this.swiper
}
next() {
  this.swiper.swiperRef.slideNext(500);
}
imageTaps(audioIndexNumber) {
  console.log('this image tapped..');
  this.onAudioStart(audioIndexNumber);
}

}
