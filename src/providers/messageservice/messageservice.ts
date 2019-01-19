import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MessageserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageserviceProvider {

  private url: string = "http://date.jsontest.com";
 
  constructor(private http: Http){
    console.log('Hello Messageservice Provider');
  }

  getMessages(){
    return this.http.get(this.url)
    // .do((res:Response)=> console.log(res))
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError)
  }
  private catchError(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server error.")

  }

  private logResponse (res: Response){
    console.log (res);
  }
  private extractData (res: Response){
    return res.json();

  }

}
