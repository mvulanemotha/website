import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  more: boolean;

  constructor() {
    this.more = false;
  }

  ngOnInit(): void {
  }

}
