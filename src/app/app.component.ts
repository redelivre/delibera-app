import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RemoteServiceProvider } from './../providers/remote-service/remote-service';
import { AddPautaPage } from '../pages/pautas/addpauta';


import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('content') nav

  rootPage:any = TabsPage;
  //rootPage:any = AddPautaPage;

  AddPautaPage;
  TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private serviceProvider: RemoteServiceProvider) {
    platform.ready().then(() => {

      this.AddPautaPage = AddPautaPage;
      this.TabsPage = TabsPage;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    //console.log(page);
    this.nav.push(page);
  }

  requestLogin() {
    this.serviceProvider.requestLogin();
  }

  requestRm() {
    this.serviceProvider.requestRm();
  }

  requestCreds() {
    this.serviceProvider.requestCreds();
  }
  requestMe() {
    this.serviceProvider.requestMe();
  }

  isLoggedIn() {
    return this.serviceProvider.isLoggedIn();
  }

  isLoggedOff() {
    return this.serviceProvider.isLoggedOff();
  }
}
