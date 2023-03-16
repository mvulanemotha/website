import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  loadpageStats = false;
  daily: boolean;
  myData: [];
  monthly: boolean;
  yearly: boolean;
  today: boolean;
  visits: number;

  allMonthly: boolean;

  monthDaily: number;
  monthYearly: number;

  monthlyPage: number;
  yearlyPage: number;

  myDataMonthly: [];

  // creating a spoinner for the site
  spin: boolean;


  title = 'datatables';
  dtOptions: DataTables.Settings = {};

  date = new Date();

  // hold page hits
  home = 0
  investments = 0
  loans = 0
  mortgage = 0
  innovations = 0
  media = 0
  careers = 0
  contact = 0
  futureloans = 0
  futuresavings = 0
  corporategovernance = 0
  management = 0
  whychooseus = 0
  twitter = 0
  linkedin = 0
  facebook = 0
  instagram = 0

  // check to see if record are available or not
  recordsFound = false;


  constructor(private dataservice: DataService) {



    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();


    this.monthlyPage = month;
    this.yearlyPage = year;

    this.allMonthly = false;
    this.spin = false;
    this.monthDaily = month;
    this.monthYearly = year;

    this.daily = false;
    this.today = true;
    this.monthly = false;
    this.myData = [];
    this.myDataMonthly = [];
    this.yearly = false;
    this.visits = 0;
  }

  ngOnInit(): void {
    this.getTodayStats();
  }




  // getting today visits
  getTodayStats() {
    this.myData = []

    this.spin = true;
    this.dataservice.getDailyStats().subscribe((response) => {

      this.spin = false;
      this.myData = response as any;

      this.visits = this.myData.length;

    });
  }

  // function to produce month
  getMonthName(month: number) {

    let myMonth = "None"

    switch (month) {

      case 1:
        myMonth = "January";
        break;
      case 2:
        myMonth = "February";
        break;
      case 3:
        myMonth = "March";
        break;
      case 4:
        myMonth = "April";
        break;
      case 5:
        myMonth = "May";
        break;
      case 6:
        myMonth = "June";
        break;
      case 7:
        myMonth = "July";
        break;
      case 8:
        myMonth = "August";
        break;
      case 9:
        myMonth = "September";
        break;
      case 10:
        myMonth = "October";
        break;
      case 11:
        myMonth = "November";
        break;
      case 12:
        myMonth = "December";
        break;
      default:
        myMonth = "January";

    }

    return myMonth;

  }

  // create function to load stats for the day
  getDailyAVStats(month: number, year: number) {

    this.spin = true;
    this.myData = []
    this.dataservice.getDailyAVStats(month, year).subscribe((response) => {

      console.log(response)
      this.spin = false;
      this.myData = response as any;
    });
  }

  // getMonthly stasts
  getMontly() {

    // use monthly to forward to
    this.myData = []
    this.spin = true;
    this.dataservice.getMonthlyAvstats(this.monthYearly).subscribe((response) => {

      this.spin = false;
      this.myData = response as any;
    }, (error) => {
      console.log(error);
    });
  }


  // getYearly stats
  getYearly() {

    this.spin = true;
    this.myData = []
    this.dataservice.getYearly().subscribe((response) => {

      this.spin = false;

      this.myData = response as any;
    }, (error) => {
      console.log(error);

    })

  }


  // get monthly logs

  getMonthlyLog(month: string) {

    this.allMonthly = false;

    this.myDataMonthly = [];
    this.dataservice.getMonthlylogs(month).subscribe((response) => {

      this.allMonthly = true;

      if (Object.keys(response).length > 0) {
        this.myDataMonthly = response as any;
      }

    });

  }

  // get pages visisted

  pageVisited(month: any, year: any) {

    this.loadpageStats = true;

    this.dataservice.getPageVisists(month, year).subscribe((response) => {



      console.log(Object.keys(response).length);
      this.loadpageStats = false;

      var data = response as any;

      // if object is empty lets initialise with a 0 
      if (Object.keys(response).length === 0) {

        this.home = 0;
        this.investments = 0;
        this.loans = 0;
        this.mortgage = 0;
        this.innovations = 0
        this.media = 0
        this.careers = 0
        this.contact = 0
        this.futureloans = 0
        this.futuresavings = 0
        this.corporategovernance = 0
        this.management = 0
        this.whychooseus = 0
        this.twitter = 0
        this.linkedin = 0
        this.facebook = 0
        this.instagram = 0
      }

      data.forEach((e: any) => {



        switch (e.pagename) {
          case "home": this.home = e.number
            break;
          case "investments": this.investments = e.number
            break;
          case "loans": this.loans = e.number
            break;
          case "mortgage": this.mortgage = e.number
            break;
          case "innovations": this.innovations = e.number
            break;
          case "media": this.media = e.number
            break;
          case "careers": this.careers = e.number
            break;
          case "contact": this.contact = e.number
            break;
          case "futureloans": this.futureloans = e.number
            break;
          case "futuresavings": this.futuresavings = e.number
            break;
          case "corporategovernance": this.corporategovernance = e.number
            break;
          case "management": this.management = e.number
            break;
          case "whychooseus": this.whychooseus = e.number
            break;
          case "twitter": this.twitter = e.number
            break;
          case "linkedin": this.linkedin = e.number
            break;
          case "facebook": this.facebook = e.number
            break;
          case "instagram": this.instagram = e.number
            break;
          default:
            break;
        }

        //console.log(this.investments);

      });

    });

  }



}
