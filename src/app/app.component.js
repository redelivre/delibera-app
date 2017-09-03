var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RemoteServiceProvider } from './../providers/remote-service/remote-service';
import { AddPautaPage } from '../pages/pautas/addpauta';
import { TabsPage } from '../pages/tabs/tabs';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, serviceProvider) {
        var _this = this;
        this.serviceProvider = serviceProvider;
        this.rootPage = TabsPage;
        platform.ready().then(function () {
            _this.AddPautaPage = AddPautaPage;
            _this.TabsPage = TabsPage;
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        //console.log(page);
        this.nav.push(page);
    };
    MyApp.prototype.requestLogin = function () {
        this.serviceProvider.requestLogin();
    };
    MyApp.prototype.requestRm = function () {
        this.serviceProvider.requestRm();
    };
    MyApp.prototype.requestCreds = function () {
        this.serviceProvider.requestCreds();
    };
    MyApp.prototype.requestMe = function () {
        this.serviceProvider.requestMe();
    };
    MyApp.prototype.isLoggedIn = function () {
        return this.serviceProvider.isLoggedIn();
    };
    MyApp.prototype.isLoggedOff = function () {
        return this.serviceProvider.isLoggedOff();
    };
    return MyApp;
}());
__decorate([
    ViewChild('content'),
    __metadata("design:type", Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, StatusBar,
        SplashScreen,
        RemoteServiceProvider])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map