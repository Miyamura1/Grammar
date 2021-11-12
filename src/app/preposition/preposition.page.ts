import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagePage } from '../image/image.page';

@Component({
  selector: 'app-preposition',
  templateUrl: './preposition.page.html',
  styleUrls: ['./preposition.page.scss'],
})
export class PrepositionPage implements OnInit {
  sliderOpts = {
    zoom: true,
    slidesPerView:1.5,
    spaceBetween: 20,
    centeredSlides: true
  };
  constructor(private modalCtrl: ModalController) { }

  async OpenPreview(img){
    const modal = await this.modalCtrl.create({
     component: ImagePage,
     cssClass: 'trasparent-modal',
     componentProps:{
       img
     } 
    });
    modal.present();
  }
  ngOnInit() {
  }

}
