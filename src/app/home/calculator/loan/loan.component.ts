import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  // variables to hold
  rate: any
  totalAmount: any
  intrest: any

  // variables to store data from input fields
  term: number;
  investment: number;
  product: string;

  innerRate = 0;

  //
  btnCalculator: boolean;
  btnIntrestRates: boolean;

  // negotiate
  negotiate: number;
  million: boolean;

  // error message
  error: boolean;
  errorAmount: boolean;

  //montly interest
  monthlyIncome = 0

  //yearly interest
  yearlyIntrest = 0
  yearlyIntrestTwo = 0
  yearlyIntrestThree = 0
  yearlyIntrestFour = 0
  yearlyIntrestFive = 0

  //totals
  rowOne = 0
  rowTwo = 0
  rowThree = 0
  rowFour = 0
  rowFive = 0

  investmentQoutation = ""


  //display 
  fourRows = false
  fiveRows = false
  threeRows = false

  //display income or growth
  incomeInvestment = false;
  growthInvestment = false;

  //total interest
  totalInterest: any

  // min value max value
  minPay: any
  maxPay: any

  // displays expected
  incomeDisplay = false
  growthIncome = false

  constructor() {

    this.totalAmount = 0
    this.totalInterest = 0
    this.minPay = 0
    this.maxPay = 0
    this.incomeDisplay = true
    this.incomeInvestment = true
    this.errorAmount = false
    this.error = false
    this.million = false
    this.btnIntrestRates = false
    this.term = 2;
    this.rate = 8;
    this.product = "income";
    this.investment = 0.0;
    this.btnCalculator = true;
    this.negotiate = 0.0;

  }

  ngOnInit(): void {
  }


  // radio button change

  radioChangeIncome = (evt: any) => {

    var target = evt.target;

    if (target.checked) {
      this.growthInvestment = false;
      this.incomeInvestment = true;
    }
  }

  radioChangeGrowth = (evt: any) => {

    var target = evt.target;

    if (target.checked) {
      this.growthInvestment = true;
      this.incomeInvestment = false;
    }
  }


  //iniIncome
  iniIncome = () => {

    this.rate = 8
    this.investment = 0

  }

  //iniGrowth
  iniGrowth = () => {

    this.rate = 8
    this.investment = 0

  }




  // show rates
  showRates() {
    this.btnIntrestRates = true;
    this.btnCalculator = false;
  }

  // show calculator
  showCalculator() {
    this.btnCalculator = true;
    this.btnIntrestRates = false;
  }

  // function to display textbox if amount is greater than i million
  greaterThanMillion() {
    /*
    if (this.investment > 1000000) {
      this.million = true;
    } else {
      this.million = false;
    }
    */

    this.growthRate()
  }

  //produce a rate error
  rateError() {
    if (this.negotiate > 0.25) {
      this.error = true;
    } else {
      this.error = false;
    }
  }

  rateChange = () => {

    {
      if (this.term == 2) {
        this.rate = 8
        this.threeRows = false
        this.fourRows = false
        this.fiveRows = false
      }
      if (this.term == 3) {
        this.rate = 8.25;
        this.fiveRows = false
        this.fourRows = false
        this.threeRows = true
      } else if (this.term == 4) {
        this.fourRows = true
        this.threeRows = true
        this.fiveRows = false
        this.rate = 8.5;
      } else if (this.term == 5) {
        this.fiveRows = true
        this.fourRows = true
        this.threeRows = true
        this.rate = 8.75;
      }
    }

  }

  // CREATE A FUNCTION TO MAKE CALCULATIONS DEPANDING ON WHAT IS FEED TO THE INPUT FIELDS
  calculator() {



    if (this.investment <= 0) {
      this.errorAmount = true;
      return;
    } else {
      this.errorAmount = false;
    }

    this.investmentQoutation = "E " + this.investment.toLocaleString("en-US").toString()

    //var percent = ((this.rate / 100))
    var percent = ((this.rate / 100))
    

    
    


    /*
    this.rowOne = parseFloat(((this.investment) * (((1 + (((percent) / 365)))) ** (365 * 1))).toFixed(2))
    */

    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]  //   2022
    var yearTotal = 0

    months.forEach(el => {
      var total = parseFloat(((this.investment) * ((1 + (percent / 360)) ** el)).toFixed(2)) - this.investment
      yearTotal += total
    });

    this.minPay = parseFloat(((this.investment) * ((1 + (percent / 360)) ** 28)).toFixed(2)) - this.investment
    this.maxPay = parseFloat(((this.investment) * ((1 + (percent / 360)) ** 31)).toFixed(2)) - this.investment

    this.minPay = parseFloat(this.minPay.toFixed(2))
    this.maxPay = parseFloat(this.maxPay.toFixed(2))
    
    
    let newRate = (4)/100
    
    var years = 360/360
    
    var month = parseFloat((( 1200 ) * (((1 + (((newRate) / 12)))) ** (12 * years))).toFixed(2)) - 1200
    //let test = parseFloat(((15954737.90) * ((1 + (newRate / 360)) ** 31)).toFixed(2)) - 15954737.90
    
    console.log(month)
    
    
    this.minPay = this.minPay.toLocaleString("en-US").toString()
    this.maxPay = this.maxPay.toLocaleString("en-US").toString()

    this.totalInterest = parseFloat((yearTotal * this.term).toFixed(2))

    this.totalAmount = parseFloat((this.totalInterest + this.investment).toFixed(2))

    //interest per year

    var avarage = parseFloat(((this.totalInterest / this.term)).toFixed(2))

    this.rowOne = avarage

    if (this.term == 2) {
      this.rowTwo = avarage
    }

    if (this.term == 3) {
      this.rowTwo = avarage
      this.rowThree = avarage
    }

    if (this.term == 4) {
      this.rowTwo = avarage
      this.rowThree = avarage
      this.rowFour = avarage
    }

    if (this.term == 5) {
      this.rowTwo = avarage
      this.rowThree = avarage
      this.rowFour = avarage
      this.rowFive = avarage
    }

    this.totalInterest = this.totalInterest.toLocaleString("en-US").toString()
    this.totalAmount = this.totalAmount.toLocaleString("en-US").toString()

    //move to results when calculation is done
    document.getElementById("results")?.scrollIntoView();

  }

  
  // calculate growth
  growthRate = () => {

    try {

      //check if investment amount has been included

      //if year equal 2 years

      if (this.term == 2) {

        if ((this.investment < 50000)) {
          this.rate = 8
        }

        if ((this.investment >= 50000) && (this.investment <= 100000)) {
          this.rate = 8.25
        }

        if ((this.investment > 100000) && (this.investment <= 500000)) {
          this.rate = 8.50
        }

        if ((this.investment > 500000) && (this.investment <= 1000000)) {
          this.rate = 8.75
        }

        if ((this.investment > 1000000) && (this.term == 2)) {
          this.rate = 9
        }
      }


      //if year equal 3 years

      if (this.term == 3) {

        if ((this.investment < 50000)) {
          this.rate = 8.25
        }

        if ((this.investment >= 50000) && (this.investment <= 100000)) {
          this.rate = 8.50
        }

        if ((this.investment > 100000) && (this.investment <= 500000)) {
          this.rate = 8.75
        }

        if ((this.investment > 500000) && (this.investment <= 1000000)) {
          this.rate = 9
        }

        if ((this.investment > 1000000)) {
          this.rate = 9.25
        }
      }


      //if year equal 5 years

      if (this.term == 5) {

        if ((this.investment < 50000)) {
          this.rate = 8.5
        }

        if ((this.investment >= 50000) && (this.investment <= 100000)) {
          this.rate = 8.75
        }

        if ((this.investment > 100000) && (this.investment <= 500000)) {
          this.rate = 9
        }

        if ((this.investment > 500000) && (this.investment <= 1000000)) {
          this.rate = 9.25
        }

        if ((this.investment > 1000000)) {
          this.rate = 9.50
        }
      }




    } catch (error) {
      console.log(error)
    }

  }

  //calculate growth investment

  calculateGrowthInvestment = () => {

    try {

      if (this.investment === 0 || this.investment === null || this.investment === undefined) {
        alert("Investment field is empty")
        return
      }

      this.incomeInvestment = false
      // this.rate
      var percent = (this.rate / 100)


      var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]  //   2022
      var yearTotal = 0


      // term 1 

      months.forEach(el => {

        var years = (el / 360)
        /*var monthTest = parseFloat(((this.investment) * ((1 + (percent / 12)) ** el)).toFixed(2)) - this.investment
        console.log(monthTest)*/
        var month = parseFloat(((this.investment) * (((1 + (((percent) / 12)))) ** (12 * years))).toFixed(2)) - this.investment
        //console.log(month)
        yearTotal += month
      });


      //term 2
      var total2 = this.rowOne = yearTotal + this.investment
      this.rowOne = parseFloat(this.rowOne.toFixed(2))
      var year2Total = 0
      months.forEach(el => {

        var years = (el / 360)
        //var month = parseFloat(((total2) * ((1 + (percent / 12)) ** years)).toFixed(2)) - total2
        var month = parseFloat(((total2) * (((1 + (((percent) / 12)))) ** (12 * years))).toFixed(2)) - total2
        year2Total += month

      })

      console.log(year2Total)



      //term 3

      var total3 = this.rowTwo = year2Total + total2
      this.rowTwo = parseFloat(this.rowTwo.toFixed(2))
      //console.log(this.rowTwo)
      var year3Total = 0
      months.forEach(el => {

        var years = (el / 360)
        //var month = parseFloat(((total3) * ((1 + (percent / 12)) ** years)).toFixed(2)) - total3
        var month = parseFloat(((total3) * (((1 + (((percent) / 12)))) ** (12 * years))).toFixed(2)) - total3
        year3Total += month

      })

      //term 4

      var total4 = this.rowThree = year3Total + total3
      this.rowThree = parseFloat(this.rowThree.toFixed(2))
      var year4Total = 0
      months.forEach(el => {

        var years = (el / 360)
        //var month = parseFloat(((total4) * ((1 + (percent / 12)) ** years)).toFixed(2)) - total4
        var month = parseFloat(((total4) * (((1 + (((percent) / 12)))) ** (12 * years))).toFixed(2)) - total4
        year4Total += month

      })

      //term 5

      var total5 = this.rowFour = year4Total + total4
      this.rowFour = parseFloat(this.rowFour.toFixed(2))

      var year5Total = 0
      months.forEach(el => {

        var years = (el / 360)
        //var month = parseFloat(((total5) * ((1 + (percent / 12)) ** years)).toFixed(2)) - total5
        var month = parseFloat(((total5) * (((1 + (((percent) / 12)))) ** (12 * years))).toFixed(2)) - total5
        year5Total += month

      })

      this.rowFive = parseFloat((total5 + year5Total).toFixed(2))


      // initialise to false first
      this.threeRows = false
      this.fourRows = false
      this.fiveRows = false

      if (this.term == 2) {

        var totalAmount = parseFloat((this.rowTwo.toFixed(2)))

        this.totalInterest = parseFloat((totalAmount - this.investment).toFixed(2))

        this.totalAmount = parseFloat(totalAmount.toFixed(2))



      }


      if (this.term == 3) {

        var totalAmount = parseFloat(this.rowThree.toFixed(2))

        this.totalInterest = parseFloat((totalAmount - this.investment).toFixed(2))

        this.totalAmount = parseFloat(totalAmount.toFixed(2))

        this.threeRows = true
      }

      if (this.term == 4) {

        var totalAmount = parseFloat(this.rowFour.toFixed(2))

        this.totalInterest = parseFloat((totalAmount - this.investment).toFixed(2))

        this.totalAmount = parseFloat(totalAmount.toFixed(2))

        this.threeRows = true
        this.fourRows = true
      }

      if (this.term == 5) {

        var totalAmount = parseFloat(this.rowFive.toFixed(2))

        this.totalInterest = parseFloat((totalAmount - this.investment).toFixed(2))

        this.totalAmount = parseFloat(totalAmount.toFixed(2))

        this.threeRows = true
        this.fourRows = true
        this.fiveRows = true
      }

      this.investmentQoutation = "E " + this.investment.toLocaleString("en-US").toString()
      this.totalInterest = this.totalInterest.toLocaleString("en-US").toString()
      this.totalAmount = this.totalAmount.toLocaleString("en-US").toString()

      //move to results when calculation is done
      document.getElementById("results")?.scrollIntoView();


    } catch (error) {
      console.log(error)
    }

  }


}
