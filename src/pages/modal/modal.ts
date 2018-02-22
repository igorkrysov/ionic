import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  ref_edit_record: any;
  edit_record: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.ref_edit_record = this.navParams.get("category");
    //this.edit_record = this.ref_edit_record;
    this.edit_record = {id: this.ref_edit_record.id, text: this.ref_edit_record.text};
    //
    // console.log(this.ref_edit_record);
    // console.log(this.ref_edit_record[0]);
    // console.log(this.ref_edit_record.text);
    // this.edit_record.id = r.id;
    // this.edit_record.text = r.text;
    // this.edit_record.updated_at = r.updated_at;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  updateRecord(){
    this.ref_edit_record.text = this.edit_record.text;
    this.viewCtrl.dismiss();
  }

}
