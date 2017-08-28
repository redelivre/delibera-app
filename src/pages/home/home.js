var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
var HomePage = (function () {
    function HomePage(navCtrl, serviceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.serviceProvider = serviceProvider;
        this.serviceProvider.getPautas().then(function (pautas) {
            //console.log( JSON.stringify( pautas ) );
            _this.pautas = pautas;
        });
    }
    HomePage.prototype.htmlToString = function (string) {
        return string.replace(/<\/?[^>]+(>|$)/g, "");
    };
    HomePage.prototype.isLoggedIn = function () {
        this.serviceProvider.isLoggedIn();
    };
    HomePage.prototype.status = function (name) {
        if (name === "comresolucao") {
            return "Resolução";
        }
        else if (name === "relatoria") {
            return "Relatoria";
        }
    };
    HomePage.prototype.formatDateOld = function (date) {
        var monthNames = [
            "Janeiro", "Fevereiro", "Março",
            "Abril", "Maio", "Junho", "Julio",
            "Agosto", "Setembro", "Outubro",
            "Novembro", "Dezembro"
        ];
        date = new Date(date);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    };
    HomePage.prototype.formatDate = function (date) {
        var monthNames = [
            "01", "02", "03",
            "04", "05", "06", "07",
            "08", "09", "10",
            "11", "12"
        ];
        date = new Date(date);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + '/' + monthNames[monthIndex] + ' ' + year;
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController,
        RemoteServiceProvider])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map