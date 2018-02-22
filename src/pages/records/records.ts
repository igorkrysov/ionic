import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { AboutPage } from '../about/about';


// import { HttpClientModule } from '@angular/common/http';
//import { Http } from '@angular/http';
// import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the RecordsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-records',
  templateUrl: 'records.html',
})
export class RecordsPage {
  records: any;
  tmp: any;
  new_record: string;



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public modalCtrl: ModalController ) {
     let url = "http://localhost:8000/api/get_records";
      this.tmp = "SFSDFDFSFDDF";
     this.http.get(url).map(res => res.json()).subscribe(data => {


         this.records = data;
         console.log(this.records);

     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordsPage');
    console.log('ionViewDidLoad(): ',this.records);
  }

  clickAlert(){
    console.log('Alert(): ',this.records);
      this.tmp = "alert";
  }

  editRecord(category:any){
    console.log('edit: ', category);
    //this.navCtrl.push(ModalPage);
    let profileModal = this.modalCtrl.create(ModalPage, { category: category });
    profileModal.present();
  }

  removeRecord(index:any){
    console.log('remove: ', index);
    this.records.splice(index, 1);
  }

  addRecord(){
    this.records.push({'id': 100, 'text': this.new_record });
  }

}
