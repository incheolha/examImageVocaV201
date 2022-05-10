/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, AfterContentChecked, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { LevelInfo } from '../../model/level.model';
import { ToeicVocaService } from './toeic-voca.service';

import SwiperCore, { EffectFade, EffectCube, EffectCoverflow, EffectFlip, SwiperOptions, Pagination, Navigation, Autoplay } from 'swiper';

SwiperCore.use([EffectFade, EffectCube, EffectCoverflow, EffectFlip, Pagination, Navigation, Autoplay]);

import { Router } from '@angular/router';
@Component({
  selector: 'app-toeic-voca',
  templateUrl: './toeic-voca.page.html',
  styleUrls: ['./toeic-voca.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToeicVocaPage implements OnInit, AfterContentChecked {


  @ViewChild('swiper') swiper: SwiperComponent;

  levelInfos: LevelInfo[] = [];

  imagePath = '../../images/favicon.png';
  tempImageURL: string;
  touchAllowed = true;

  config: SwiperOptions = {
                              slidesPerView: 1,
                              spaceBetween: 30,
                              //  autoplay: true,
                              pagination: { clickable: true },
                              effect: 'coverflow',
                              navigation: true,
                              grabCursor: true
                          };

  constructor(private router: Router, private toeicVocaService: ToeicVocaService) { }

  ngOnInit() {
              this.levelInfos = this.toeicVocaService.getLevelInfos();
              console.log(this.levelInfos);
  }

  ngAfterContentChecked(): void {

    if( this.swiper ) {
        this.swiper.updateSwiper({});
    }
  }
  swiperSlideChanged(event) {

    console.log('this is swiper clicked');
    console.log(this.swiper.swiperRef.activeIndex);
    console.log(event[0].activeIndex);
  }

  onToeic(levelId: string, levelTitle: string) {

    if (levelId === '1') {
      console.log(levelTitle);
      this.router.navigate(['/tabs/exam/toeic/basicvoca']);
    } else if (levelId === '2') {
      console.log(levelTitle);
      this.router.navigate(['/tabs/exam/toeic/intermediatevoca']);
    } else if (levelId === '3') {
      console.log(levelTitle);
      this.router.navigate(['/tabs/exam/toeic/advancedvoca']);
    } else if (levelId === '4') {
      console.log(levelTitle);
      this.router.navigate(['/tabs/exam/toeic/actualvoca']);
    } else if (levelId === '5') {
      console.log(levelTitle);
      this.router.navigate(['/tabs/exam/toeic/toeictest']);
    }
  }

  onBack() {
    this.router.navigate(['/tabs/exam']);
  }

}
