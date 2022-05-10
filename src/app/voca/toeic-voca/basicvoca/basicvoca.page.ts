import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageVoca } from '../../../model/imageVoca.model';
import { ToeicVocaService } from '../toeic-voca.service';
@Component({
  selector: 'app-basicvoca',
  templateUrl: './basicvoca.page.html',
  styleUrls: ['./basicvoca.page.scss'],
})
export class BasicvocaPage implements OnInit {

  basicToeicVocas: ImageVoca[] = [];
  basicChapterList: ImageVoca[] = [];
  basicChapterListUrl: ImageVoca[] = [];

  items = [1,2,3,4,5,6,7,8];

  constructor(private toeicVocaService: ToeicVocaService, private router: Router) { }

  ngOnInit() {

    this.basicToeicVocas = this.toeicVocaService.getBasicToeicVoca();
    console.log(this.basicToeicVocas);

    // 자동으로 20일분 이미지를 추출하기 위해서 imagevoca model에서 각 날짜의 첫번째 레코드를 필터한후 이것을 각 ion-list에 연결하기위해 사용

    const chapterKey = 1;
    this.basicChapterList = this.basicToeicVocas.filter( b => b.chapter === chapterKey );
    console.log(this.basicChapterList);


  }

  onBack() {
    console.log('back to toeic');
    this.router.navigate(['/tabs/exam/toeic']);
  }
  onAlram() {
    console.log('this alram is clicked');
  }

  onDashboard() {
    console.log('this is Dashboard is clicked');
  }

  onLevelTest() {
    console.log('this is Level Test is clicked');
  }

  onDaily() {
    console.log('this is Daily clicked');
    this.router.navigate(['/tabs/exam/toeic/toeic-daily-practice']);
  }
}
