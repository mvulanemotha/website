import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  saved: boolean;

  clientName: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
  emptyFields: boolean;

  failedSave: boolean;
  checkEmail: boolean;
  sending: boolean;



  constructor(private emailservice: EmailService) {

    this.clientName = '';
    this.surname = '';
    this.email = '';
    this.phone = '';
    this.message = '';

    this.saved = false;
    this.emptyFields = false;
    this.failedSave = false;

    this.checkEmail = false;
    this.sending = false;

  }

  ngOnInit(): void {

    this.sendMessage2();

  }


  // send a second message test
  sendMessage2() {

    this.emailservice.sendMessage2().subscribe((data) => {
      console.log(data);
    });

  }

  sendMessage() {

    if (this.clientName === '' || this.surname === '' || this.phone === '' || this.message === '') {
      this.emptyFields = true;
      return;
    }

    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (format.test(this.email)) {
      //this.checkEmail = true;
    } else {
      this.checkEmail = true;
      return;
    }


    this.sending = true;

    this.emailservice.sendMessage(this.clientName, this.surname, this.email, this.phone, this.message).subscribe((response) => {

      console.log(response);

      var myData = response;
      this.emptyFields = false;
      this.sending = false;

      if (myData === "sent") {
        this.saved = true;
        this.failedSave = false;
      }
      else {
        this.saved = false;
        this.failedSave = true;
      }
    })
  }

}
