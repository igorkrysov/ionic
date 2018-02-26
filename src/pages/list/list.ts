import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  private records: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _data: DataProvider) {
  }

  ionViewDidLoad() {
    this._data.record.subscribe(res => this.records = res);
    console.log('ionViewDidLoad ListPage');
  }

}
