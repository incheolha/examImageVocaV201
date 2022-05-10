import { Component, OnInit } from '@angular/core';

import { ImageVoca } from '../../../model/imageVoca.model';
import { ToeicVocaService } from '../toeic-voca.service';

@Component({
  selector: 'app-actualvoca',
  templateUrl: './actualvoca.page.html',
  styleUrls: ['./actualvoca.page.scss'],
})
export class ActualvocaPage implements OnInit {

  actualToeicVocas: ImageVoca[] = [];
  constructor(private toeicVocaService: ToeicVocaService) { }

  ngOnInit() {

    this.actualToeicVocas = this.toeicVocaService.getActualToeicVoca();
    console.log(this.actualToeicVocas);
  }

}
