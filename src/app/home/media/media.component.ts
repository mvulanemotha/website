import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  showImg: boolean;
  firstGm = false
  secondGm = false;
  
  constructor() {
    this.showImg = false;
  }
  
  ngOnInit(): void {
  }



}
