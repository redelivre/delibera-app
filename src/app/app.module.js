var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPautaPage } from '../pages/pautas/addpauta';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.prototype.requestLogin = function () {
        console.log("Teste");
    };
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            TabsPage,
            AddPautaPage
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp),
            HttpModule
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            TabsPage,
            AddPautaPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            RemoteServiceProvider
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map