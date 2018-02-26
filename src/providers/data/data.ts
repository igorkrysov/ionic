// import { HttpClientModule } from '@angular/common/http';
//import { Http } from '@angular/http';
// import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';




// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private records = new BehaviorSubject<any>([{'text' : "DataFromProvider", 'updated_at' : "11.11.2017"}]);
  record = this.records.asObservable();

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
    let url = "http://localhost:8000/api/get_records";
    this.http.get(url).map(res => res.json()).subscribe(data => {

      this.records.next(this.records.getValue().concat(data));
      //console.log(this.records);
    });

  }

  changeRecord(record){
    this.records.next(record)
  }
}
