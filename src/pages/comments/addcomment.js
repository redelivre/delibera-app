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
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { HomePage } from '../../pages/home/home';
var NewCommentPage = (function () {
    function NewCommentPage(navParams, navCtrl, serviceProvider, toastCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.serviceProvider = serviceProvider;
        this.toastCtrl = toastCtrl;
        this.comment = { content: "", post: "", parent: "" };
    }
    NewCommentPage.prototype.newComment = function () {
        var _this = this;
        this.comment.post = this.navParams.data.id;
        if (this.navParams.data.hasOwnProperty("parent")) {
            if (this.navParams.data.parent !== "") {
                this.comment.parent = this.navParams.data.parent;
            }
        }
        else {
            delete this.comment.parent;
        }
        console.log(JSON.stringify(this.comment));
        this.serviceProvider.newComment(this.comment).then(function (like) {
            console.log(JSON.stringify(like, null, 1));
            _this.presentToast('Comentário adicionado com sucesso.');
            _this.navCtrl.push(HomePage);
        }, function (like) { console.log(JSON.stringify(like, null, 1)); });
    };
    NewCommentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    return NewCommentPage;
}());
NewCommentPage = __decorate([
    Component({
        selector: 'page-new-comment',
        templateUrl: 'addcomment.html'
    }),
    __metadata("design:paramtypes", [NavParams,
        NavController,
        RemoteServiceProvider,
        ToastController])
], NewCommentPage);
export { NewCommentPage };
//# sourceMappingURL=addcomment.js.map