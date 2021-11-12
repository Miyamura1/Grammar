import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preposition1',
  templateUrl: './preposition1.page.html',
  styleUrls: ['./preposition1.page.scss'],
})
export class Preposition1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  slidesOpts={
    zoom:{
      maxRatio: 3
    }
  };
}
