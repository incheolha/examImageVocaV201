import { Component, OnInit } from '@angular/core';

import { ImageVoca } from '../../../model/imageVoca.model';
import { ToeicVocaService } from '../toeic-voca.service';

@Component({
  selector: 'app-intermediatevoca',
  templateUrl: './intermediatevoca.page.html',
  styleUrls: ['./intermediatevoca.page.scss'],
})
export class IntermediatevocaPage implements OnInit {

  intermediateVocas: ImageVoca[] = [];

  constructor(private toeicVocaService: ToeicVocaService) { }

  ngOnInit() {
    this.intermediateVocas = this.toeicVocaService.getIntermediateToeicVoca();
    console.log(this.intermediateVocas);
  }

}
