import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LevelInfo } from '../../model/level.model';
import { ToeflVocaService } from './toefl-voca.service';


@Component({
  selector: 'app-toefl-voca',
  templateUrl: './toefl-voca.page.html',
  styleUrls: ['./toefl-voca.page.scss'],
})
export class ToeflVocaPage implements OnInit {

  levelInfos: LevelInfo[] = [];
  constructor(private router: Router,
              private toeflVocaService: ToeflVocaService) {}

  ngOnInit() {

    this.levelInfos = this.toeflVocaService.getLevelInfos();
    console.log(this.levelInfos);
  }


  onToefl(levelId) {
    this.router.navigate(['tabs/exam/toefl', levelId.id]);
  }

  onBack() {
    this.router.navigate(['/tabs/exam']);
  }
}
