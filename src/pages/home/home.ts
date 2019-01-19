import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { MessageserviceProvider } from '../../providers/messageservice/messageservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 


  constructor(private messageService:MessageserviceProvider ) {
    this.getMessages();
  }
  getMessages() {
    this.messageService.getMessages().subscribe(data=> console.log(data));
   
  }

}
