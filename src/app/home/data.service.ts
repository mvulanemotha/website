import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //url = "http://localhost:3005/stats/";
  url = "https://vpsportal.scbs.co.sz/stats/stats/"
  

  currentDateTime: any;
  visitor: string[] = [];

  constructor(private http: HttpClient, private date: DatePipe) {

    this.currentDateTime = this.date.transform((new Date), 'yyyy-MM-dd HH:mm:ss');
  }

  // function add value if doesnt exe
  sitevisit = (value: any) => {

    try {

      if (!this.visitor.includes(value)) {
        this.visitor.push(value);
      }

    } catch (error) {
      console.log(error)
    }
  }
  // return visited site
  getvisited = () => {

    return this.visitor;

  }

  //get daily stats
  getDailyStats() {
    return this.http.get(this.url + "today/")
  }

  // GET AVERAGE OF DAILY VISITORS
  getDailyAVStats(month: number, year: number) {

    const data = { "month": month, "year": year };

    return this.http.get(this.url + "avday/", { params: data })
  }


  // get monthly stats
  getMonthlyAvstats(year: number) {

    return this.http.get(this.url + "avmonthly/", { params: { year: year } });

  }

  //getyearly
  getYearly() {

    return this.http.get(this.url + "avyear/");

  }

  // get monthly logs
  getMonthlylogs(month: string) {

    return this.http.get(this.url + "monthlylogs/", { params: { month } });

  }

  // add page hits to database
  pageVisits(page: string) {

    return this.http.post(this.url + "pagehit/", { page: page, date: this.currentDateTime })

  }

  // get page visisted
  getPageVisists(month: string, year: string) {
    return this.http.get(this.url + "pagehit/", { params: { month: month, year: year } });
  }


}
