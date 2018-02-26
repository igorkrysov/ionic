import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RecordsPage } from '../pages/records/records';
import { ModalPage } from '../pages/modal/modal';
import { ListPage } from '../pages/list/list';
import { MapPage } from '../pages/map/map';
import { NavigatorPage } from '../pages/navigator/navigator'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { RedditDataProvider } from '../providers/reddit-data/reddit-data';

//import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataProvider } from '../providers/data/data';
//import { RedditDataProvider } from '../providers/reddit-data/reddit-data';

import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RecordsPage,
    ModalPage,
    ListPage,
    MapPage,
    NavigatorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RecordsPage,
    ModalPage,
    ListPage,
    MapPage,
    NavigatorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Geolocation
    //RedditDataProvider,
    // RedditDataProvider
  ]
})
export class AppModule {}
