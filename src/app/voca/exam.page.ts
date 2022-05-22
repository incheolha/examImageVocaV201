import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from '../model/setting.model';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {

  subject = [];
  settings: Setting;

  constructor(private router: Router) { }

  ngOnInit() {
    this.subject = [
      {
        img: 'assets/images/abandon.png',
        name: 'TOEIC'
      },
      {
        img: 'assets/images/abandon.png',
        name: 'TOEFL'
      },
      {
        img: 'assets/images/abbreviate.png',
        name: '수능단어'
      },
      {
        img: 'assets/images/abolish.png',
        name: '고교단어'
      },
      {
        img: 'assets/images/abound.png',
        name: '중학단어'
      },
      {
        img: 'assets/images/abrupt.png',
        name: '레벨테스트'
      }
    ];

  }

  goToSubject(index) {
    console.log('subject clicked..', index);
    switch(index) {
      case 0: return this.router.navigate(['/tabs/exam/toeic']);
      case 1: return this.router.navigate(['/tabs/exam/toefl']);
      case 2: return this.router.navigate(['/tabs/exam/koreanSAT']);
      case 3: return this.router.navigate(['/tabs/exam/koreanHS']);
      case 4: return this.router.navigate(['/tabs/exam/koreanMS']);
      case 5: return this.router.navigate(['/tabs/leveltest']);
    }

  }
  onAlram() {
    console.log('this alram is clicked');
  }

  onDashboard() {
    console.log('this dashboard is clicked');
    this.router.navigate(['/tabs/dashboard']);
  }
  onLevelTest() {
    console.log('this level test is clicked');
    this.router.navigate(['/tabs/leveltest']);
  }


}
