import { Component, OnInit } from '@angular/core';
import { EmailService } from '../home/email.service';

@Component({
  selector: 'app-temp-codes',
  templateUrl: './temp-codes.component.html',
  styleUrls: ['./temp-codes.component.css']
})
export class TempCodesComponent implements OnInit {

  tempCode: string
  resultTempCode: any
  status: any

  loading: boolean

  constructor(private tempcode: EmailService) {
    this.tempCode = ""
    this.resultTempCode = "NOT AVAILABLE"
    this.loading = false
  }

  ngOnInit(): void {
  }


  //get tempCode
  getTempCode = () => {



    console.log(this.tempCode)

    if (this.tempCode === "") {
      window.alert("Make sure all fields are field")
      return
    }


    this.loading = true


    this.tempcode.getTempcode(this.tempCode).subscribe((res) => {
      
      this.loading = false
      
      let data = res as any
      
      console.log(data)

      this.resultTempCode = "Temp Code: " + data["tempcode"]

      this.status = "Customer Status: " + data["status"]



    })

  }

}
