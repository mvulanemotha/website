import { Component, OnInit } from '@angular/core';
import { GetIPService } from '../get-ip.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  constructor(private getip: GetIPService) { }

  ngOnInit(): void {

  }


  ngAfterContentInit() {

    const myCarousel = document.querySelector("#carouselExampleIndicators");
    //const carousel = $(myCarousel).carousel();

  }

}
