import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  url = 'https://www.mkhululimotha.com/app/';
  //url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }


  // function to send an email
  sendMessage(name: string, surname: string, email: string, phone: string, message: string) {


    return this.http.post(this.url + 'email', { name: name, surname: surname, email: email, phone: phone, message: message });

  }

  //get tempcode
  getTempcode(tempCode: string) {

    return this.http.get(this.url + 'clientapp/tempcode', { params: { tempCode: tempCode } })

  }
  

  sendMessage2() {

    let biza = 'Bhiza';
    const params = new FormData();
    params.append('page', biza);

    return this.http.post(this.url, { params })

  }


}
