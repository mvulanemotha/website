import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'


@Injectable({
  providedIn: 'root'
})
export class GetIPService {

  //url = "http://localhost:3005/stats/";
  
  url = "https://vpsportal.scbs.co.sz/stats/stats/"
  //154.26.153.151
  //url = "https://www.mkhululimotha.com/stats/stats/"
  
  currentDateTime: any;

  constructor(private http: HttpClient, private date: DatePipe) {

    this.currentDateTime = this.date.transform((new Date), 'yyyy-MM-dd HH:mm:ss');
    console.log(this.currentDateTime);
  }

  //Get IP Adress using http://freegeoip.net/json/?callback
  getIpAddress() {

    return this.http.get("https://api.ipify.org/?format=json");

  }

  // save ip address of a visitor
  saveVisitor = (ip: string) => {

    const data = { "ip": ip, "page": "Home", "location": "swaziland", "date": this.currentDateTime };

    return this.http.post(this.url + "savevisit/", { data });
  }

}
