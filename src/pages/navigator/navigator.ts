import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the NavigatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-navigator',
  templateUrl: 'navigator.html',
})
export class NavigatorPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  @ViewChild("places") places: ElementRef;

  //public places: ElementRef;

  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigatorPage');
    this.loadMap();
    this.startNavigating();
  }

  latitude: any;
  longitude: any;

  loadMap(){

        let latLng = new google.maps.LatLng(-34.9290, 138.6010);

        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        // let autocomplete = new google.maps.places.Autocomplete(this.places.nativeElement);
        // google.maps.event.addListener(autocomplete, 'place_changed', () => {
        //
        // let place = autocomplete.getPlace();
        // this.latitude = place.geometry.location.lat();
        // this.longitude = place.geometry.location.lng();
        // alert(this.latitude + ", " + this.longitude);
        // console.log(place);
      // });
    }

    startNavigating(){

        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;

        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);

        directionsService.route({
            origin: 'г Омск, 8 линия, 219',
            destination: 'г Омск, Омская, 21',
            travelMode: google.maps.TravelMode['DRIVING']
        }, (res, status) => {

            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }

        });

    }

    geolocate(){

    }

}
