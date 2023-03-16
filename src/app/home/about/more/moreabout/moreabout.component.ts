import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moreabout',
  templateUrl: './moreabout.component.html',
  styleUrls: ['./moreabout.component.css']
})
export class MoreaboutComponent implements OnInit {

  // show more
  more: boolean;

  constructor() {
    this.more = false;
  }

  ngOnInit(): void {

  }

}
