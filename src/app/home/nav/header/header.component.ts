import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../../data.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ;

  constructor(private router: Router, private dataservice: DataService) { }

  ngOnInit(): void {
  }

  /*  routes  */
  contact() {
    this.router.navigateByUrl('/contact');
  }


  // get function to save a page visit

  savepageclicked(page: string) {

    this.dataservice.pageVisits(page).subscribe((data) => {

      console.log(data);

    })

  }



}
