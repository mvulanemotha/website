import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  sharesSow: boolean;

  readMore1: boolean;
  readMore2: boolean;
  readMore3: boolean;
  goldShow: boolean;

  more: boolean;

  constructor() {

    this.sharesSow = false;
    this.readMore1 = false;
    this.readMore2 = false;
    this.readMore3 = false;
    this.goldShow = false;
    this.more = false;

  }

  ngOnInit(): void {
  }

}
