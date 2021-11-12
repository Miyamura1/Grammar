import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.page.html',
  styleUrls: ['./question1.page.scss'],
})
export class Question1Page implements OnInit {
 warna:string;
  soalan1 = 0;
  jsoalan1 = 0;
  soalan2 = 0;
  jsoalan2 = 0;
  soalan3 = 0;
  jsoalan3 = 0;
  soalan4 = 0;
  jsoalan4 = 0;
  soalan5 = 0;
  jsoalan5 = 0;
  soalan6 = 0;
  jsoalan6 = 0;
  soalan7 = 0;
  jsoalan7 = 0;
  soalan8 = 0;
  jsoalan8 = 0;
  soalan9 = 0;
  jsoalan9 = 0;
  soalan10 = 0;
  jsoalan10 = 0;
  total = 0;
  jawapan1 = false;
  jawapan2 = false;
  jawapan3 = false;
  jawapan4 = false;
  jawapan5 = false;
  jawapan6 = false;
  jawapan7 = false;
  jawapan8 = false;
  jawapan9 = false;
  jawapan10 = false;

  constructor() { }

  ngOnInit() {
  }
  check(soalan1, soalan2, soalan3, soalan4, soalan5, soalan6, soalan7, soalan8, soalan9, soalan10) {
    if (soalan1 == 1) {
      this.total = this.total + 1;
    }
    if (soalan2 == 2) {
      this.total = this.total + 1;
    }
    if (soalan3 == 3) {
      this.total = this.total + 1;
    }
    if (soalan4 == 3) {
      this.total = this.total + 1;
    }
    if (soalan5 == 3) {
      this.total = this.total + 1;
    }
    if (soalan6 == 2) {
      this.total = this.total + 1;
    }
    if (soalan7 == 3) {
      this.total = this.total + 1;
    }
    if (soalan8 == 3) {
      this.total = this.total + 1;
    }
    if (soalan9 == 3) {
      this.total = this.total + 1;
    }
    if (soalan10 == 1) {
      this.total = this.total + 1;
    }

    // else{
    //   this.jawapan10 =!this.jawapan10
    // }
    // }
    // else{
    //   this.jawapan9 =!this.jawapan9
    // }
    // }
    // else{
    //   this.jawapan8 =!this.jawapan8
    // }
    // }
    // else{
    //   this.jawapan7 =!this.jawapan7
    // }
    // }
    // else{
    //   this.jawapan6 =!this.jawapan6
    // }
    // }
    // else{
    //   this.jawapan5 =!this.jawapan5
    // }
    // }
    // else{
    //   this.jawapan4 =!this.jawapan4
    // }
    // }
    // else{
    //   this.jawapan3 =!this.jawapan3
    // }
    // }
    // else{
    //   this.jawapan2 =!this.jawapan2
    // }
    // }
    // else {
    //   this.jawapan1 =!this.jawapan1;
    if (soalan1 == 1) {
      this.warna="warning";
    }
    else {
      this.jawapan1 = !this.jawapan1;
    }
    if (soalan2 == 2) {
      this.warna="warning";
    }
    else {
      this.jawapan2 = !this.jawapan2
    }
    if (soalan3 == 3) {
      this.warna="warning";
    }
    else {
      this.jawapan3 = !this.jawapan3
    }
    if (soalan4 == 3) {
      this.warna="warning";
    }
    else {
      this.jawapan4 = !this.jawapan4
    }
    if (soalan5 == 3) {
      this.warna="warning";
    }
    else {
      this.jawapan5 = !this.jawapan5
    }
    if (soalan6 == 2) {
      this.warna="warning";
    }
    else {
      this.jawapan6 = !this.jawapan6
    }
    if (soalan7 == 3) {
      this.warna="warning";
    }
    else {
      this.jawapan7 = !this.jawapan7
    }
    if (soalan8 == 3) {
      this.warna="warning";
    }
    else {
      this.jawapan8 = !this.jawapan8
    }
    if (soalan9 == 3) {
      this.warna="warning";
    }
    else {
      this.jawapan9 = !this.jawapan9
    }
    if (soalan10 == 1) {
      this.warna="warning";
    }
    else {
      this.jawapan10 = !this.jawapan10
    }
  }
}

