import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  // styles: ['h1 { font-weight: normal; }']
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.loadMap();
  }

  loadMap(){
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: {lat: 54.593605, lng: 73.220927},
      zoom: 10
    //  mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    console.log("this.mapElement.nativeElement");
    console.log(this.mapElement.nativeElement);
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    console.log("We should created map!");
  }

}
