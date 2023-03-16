import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  showPlatinum: boolean;
  readMore1: boolean;
  readMore2: boolean;
  readMore3: boolean;
  sharesSow: boolean;
  goldShow: boolean;

  constructor() {

    this.showPlatinum = false;
    this.readMore1 = false;
    this.readMore2 = false;
    this.readMore3 = false;
    this.sharesSow = false;
    this.goldShow = false;

  }

  ngOnInit(): void {
  }

  // function that will make a 

}
