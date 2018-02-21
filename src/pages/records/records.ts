import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';



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

  editRecord(id:any){
    console.log('edit: ', id);
    let profileModal = this.modalCtrl.create(FactoryComponent, { userId: 8675309 });
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

@Component({
entryComponents: [
FactoryComponent
],


  selector: 'FactoryComponent',
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
TEST
</ion-content>
`
})
export class FactoryComponent {

 constructor(params: NavParams) {
   console.log('Profile');
 }

}
