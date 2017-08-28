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
import { ToastController, NavController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { TabsPage } from '../../pages/tabs/tabs';
var AddPautaPage = (function () {
    function AddPautaPage(navCtrl, serviceProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.serviceProvider = serviceProvider;
        this.toastCtrl = toastCtrl;
        this.pauta = { title: "", content: "" };
        console.log("Adicionar Pautas");
        this.TabsPage = TabsPage;
    }
    AddPautaPage.prototype.sendPauta = function (tabs) {
        var _this = this;
        console.log(JSON.stringify(this.pauta, null, 1));
        this.serviceProvider.sendPauta(this.pauta)
            .then(function (pauta) {
            console.log(JSON.stringify(pauta, null, 1));
            _this.presentToast();
            _this.navCtrl.push(TabsPage);
        });
    };
    AddPautaPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Pauta adicionada com sucesso.',
            duration: 3000
        });
        toast.present();
    };
    return AddPautaPage;
}());
AddPautaPage = __decorate([
    Component({
        selector: 'page-addpauta',
        templateUrl: 'addpauta.html'
    }),
    __metadata("design:paramtypes", [NavController,
        RemoteServiceProvider,
        ToastController])
], AddPautaPage);
export { AddPautaPage };
//# sourceMappingURL=addpauta.js.map