import { Component, OnInit } from '@angular/core';

import { ImageVoca } from '../../../model/imageVoca.model';
import { ToeicVocaService } from '../toeic-voca.service';

@Component({
  selector: 'app-advancedvoca',
  templateUrl: './advancedvoca.page.html',
  styleUrls: ['./advancedvoca.page.scss'],
})
export class AdvancedvocaPage implements OnInit {

  advancedVocas: ImageVoca[] = [];
  constructor(private toeicVocaService: ToeicVocaService) { }

  ngOnInit() {
    this.advancedVocas = this.toeicVocaService.getAdvancedToeicVoca();
    console.log(this.advancedVocas);
  }

}
