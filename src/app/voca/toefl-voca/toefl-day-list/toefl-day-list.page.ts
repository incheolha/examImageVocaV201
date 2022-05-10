import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VocaModalComponent } from '../../shared/voca-modal/voca-modal.component';
import { ImageVoca } from '../../../model/imageVoca.model';
import { ToeflVocaService } from '../toefl-voca.service';

@Component({
  selector: 'app-toefl-day-list',
  templateUrl: './toefl-day-list.page.html',
  styleUrls: ['./toefl-day-list.page.scss'],
})
export class ToeflDayListPage implements OnInit {

  levelTypeid: string;
  levelTitle: string;
  dailyVocaList: ImageVoca[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private toeflVocaService: ToeflVocaService,
              private modalController: ModalController) { }

  ngOnInit() {
             this.route.paramMap.subscribe( paramMap => {
              this.levelTypeid = paramMap.get('levelId');
              console.log(this.levelTypeid);
              this.levelTitle = this.toeflVocaService.getLevelToeflTitle(this.levelTypeid);
              this.dailyVocaList = this.toeflVocaService.getDayToeflVocas(this.levelTypeid);
              console.log(this.dailyVocaList);
             });
  }

  onBack() {
    console.log('get back to toefl level');
    this.router.navigate(['/tabs/exam/toefl']);
  }

  onDetailToefl(whatDays) {

     console.log('click', whatDays);

    this.modalController.create({
      component: VocaModalComponent, componentProps: {
        levelTypeId : this.levelTypeid,
        levelTitle : this.levelTitle,
        dayId: whatDays.days
      }
    }).then (modalEl => {
      modalEl.present();
    });
  }
}



// this.route.paramMap.subscribe( paramMap => {
//   console.log('Day Id ....', paramMap.has('dayId'));
//   console.log('Day Id ....', paramMap.get('dayId'));
//   this.dayId = paramMap.get('dayId');
//   this.dailyVoca = this.toeicVocaService.getDetailVoca('basicToeic', +this.dayId);
//   console.log(this.dailyVoca);
//   const imageVocaAudioFileIndex = 0;
//   this.onAudioStart(imageVocaAudioFileIndex);
// });

