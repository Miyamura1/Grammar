import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {

   img: any;

   @ViewChild("slider", {read: ElementRef})slider:ElementRef;

  sliderOpts = {
    zoom: {
      maxRatio: 3
    }
  };
  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.img=this.navParams.get('img');
  }

  zoom(zoomIn: boolean){
    let zoom =this.slider.nativeElement.slider.zoom;
    if(zoomIn){
      zoom.in();
    }else{
      zoom.out();
    }
  }

  close(){
    this.modalController.dismiss();
  }

}
