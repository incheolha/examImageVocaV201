import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VocaModalComponent } from '../../shared/voca-modal/voca-modal.component';
import { ImageVoca } from '../../../model/imageVoca.model';
import { ToeflVocaService } from '../toefl-voca.service';
import { DashboardService } from '../../../dashboard/dashboard.service';
import { Setting } from '../../../model/setting.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-toefl-day-list',
  templateUrl: './toefl-day-list.page.html',
  styleUrls: ['./toefl-day-list.page.scss'],
})
export class ToeflDayListPage implements OnInit, OnDestroy {

  levelTypeid: string;
  levelTitle: string;
  dailyVocaList: ImageVoca[] = [];

  settingSubscription: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private toeflVocaService: ToeflVocaService,
              private dashBoardService: DashboardService,
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

  ngOnDestroy(): void {
      if(this.settingSubscription) {
        this.settingSubscription.unsubscribe();
      }
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

