import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Howl, Howler } from 'howler';

import { ImageVoca } from '../../../../model/imageVoca.model';
import { ToeicVocaService } from '../../toeic-voca.service';

import { browserRefresh } from '../../../../app.component';

// Swiper 관련 내용
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {EffectFade, EffectCoverflow, EffectFlip, Pagination, Navigation, SwiperOptions} from 'swiper';

SwiperCore.use([EffectFade, Pagination, Navigation]);

@Component({
  selector: 'app-basicvoca-detail',
  templateUrl: './basicvoca-detail.page.html',
  styleUrls: ['./basicvoca-detail.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicvocaDetailPage implements OnInit {

  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {
    // autoplay: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: { clickable: true },
    effect: 'coverflow',
    grabCursor: true
  };

  touchAllowed = false;

  dailyVoca: ImageVoca[] = [];                               // ImageVoca Data Modeling
  dayId: string;                                             // 해당 날짜 초기화

  player: Howl = null;                                       // howler audio 초기화
  isPlaying = false;

  isFirstIndex = false;
  imageVocaAudioFilename: string;

  browserRefresh = false;

  constructor(private alertController: AlertController,
              private route: ActivatedRoute,
              private  toeicVocaService:  ToeicVocaService ) {

              }

  ngOnInit() {


    this.route.paramMap.subscribe( paramMap => {
      console.log('Day Id ....', paramMap.has('dayId'));
      console.log('Day Id ....', paramMap.get('dayId'));
      this.dayId = paramMap.get('dayId');
      this.dailyVoca = this.toeicVocaService.getDetailVoca('basicToeic', +this.dayId);
      console.log(this.dailyVoca);
      const imageVocaAudioFileIndex = 0;
      this.onAudioStart(imageVocaAudioFileIndex);
    });
  }


onAudioStart(audioFilenameIndex) {

  this.imageVocaAudioFilename = 'assets/imageVoca/mp3/'+this.dailyVoca[audioFilenameIndex].filename+'.mp3';
  Howler.autoUnlock = true;
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
  this.touchAllowed = !this.touchAllowed;
  this.swiper.swiperRef.allowTouchMove = this.touchAllowed;
}
next() {
  this.swiper.swiperRef.slideNext(500);
}
imageTaps(audioIndexNumber) {
  console.log('this image tapped..');
  this.onAudioStart(audioIndexNumber);
}

}
