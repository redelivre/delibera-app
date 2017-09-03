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
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { CommentsPage } from '../../pages/comments/comments';
import { NewCommentPage } from '../../pages/comments/addcomment';
var HomePage = (function () {
    function HomePage(navCtrl, serviceProvider, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.presentLoading();
        this.serviceProvider.credentials;
        if (this.serviceProvider.isLoggedOff()) {
            this.serviceProvider.requestLogin();
        }
        this.serviceProvider.getPautas().then(function (pautas) {
            _this.pautas = pautas;
        });
    }
    HomePage.prototype.status = function (name) {
        if (name === "comresolucao") {
            return "Resolução";
        }
        else if (name === "relatoria") {
            return "Relatoria";
        }
        else if (name === "discussao") {
            return "Discussão";
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
    HomePage.prototype.isLoggedIn = function () {
        return this.serviceProvider.isLoggedIn();
    };
    HomePage.prototype.goToComments = function (id, title) {
        this.navCtrl.push(CommentsPage, { id: id, title: title });
    };
    HomePage.prototype.like = function (id) {
        var _this = this;
        this.serviceProvider.like(id).then(function (like) {
            console.log(JSON.stringify(like, null, 1));
            _this.presentToast('Pauta curtida');
        }, function (like) { console.log(JSON.stringify(like, null, 1)); });
    };
    HomePage.prototype.unlike = function (id) {
        var _this = this;
        this.serviceProvider.unlike(id).then(function (unlike) {
            console.log(JSON.stringify(unlike, null, 1));
            _this.presentToast('Pauta descurtida');
        }, function (unlike) { console.log(JSON.stringify(unlike, null, 1)); });
    };
    HomePage.prototype.goToAddComment = function (id, title) {
        this.navCtrl.push(NewCommentPage, { id: id, title: title });
    };
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    HomePage.prototype.like_number = function (id) {
        var _this = this;
        this.serviceProvider.getNumberLikes(id).then(function (like) {
            _this.like_badge = like;
        }, function (like) { console.log(JSON.stringify(like, null, 1)); });
    };
    HomePage.prototype.unlike_number = function (id) {
        var _this = this;
        this.serviceProvider.getNumberUnlikes(id).then(function (unlike) {
            _this.unlike_badge = unlike;
        }, function (unlike) { console.log(JSON.stringify(unlike, null, 1)); });
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController,
        RemoteServiceProvider,
        LoadingController,
        ToastController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map