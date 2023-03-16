import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { GetIPService } from '../../get-ip.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  foundIP: number;

  constructor(private data: DataService, private ip: GetIPService) {
    this.foundIP = 0;
  }

  ngOnInit(): void {

    this.ip.getIpAddress().subscribe((data) => {

      let value = data as any;
      console.log(value);
      //this.data.sitevisit(value['ip']);


      // save ip address
      this.ip.saveVisitor(value['ip']).subscribe((data) => {
        console.log(data);
      })



    });
  }


  // get function to save a page visit
  savepageclicked(page: string) {

    this.data.pageVisits(page).subscribe((data) => {

      console.log(data);

    })

  }


}
