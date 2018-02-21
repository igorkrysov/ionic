import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecordsPage } from '../records/records';
// import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController){
    //, public redditService: RedditDataProvider) {

  }

  pushPage(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(RecordsPage);
  }

  ionViewDidLoad(){
  //  this.redditService.getRemoteData();
  }
}
