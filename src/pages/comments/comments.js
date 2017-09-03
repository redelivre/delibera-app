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
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { NewCommentPage } from '../../pages/comments/addcomment';
var CommentsPage = (function () {
    function CommentsPage(navParams, navCtrl, serviceProvider, loadingCtrl) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.comment = { content: "" };
        this.presentLoading();
        var id = this.navParams.get('id');
        this.title = this.navParams.get('title');
        this.serviceProvider.getPautaComments(id)
            .then(function (comments) {
            if (comments.length === 0) {
                _this.empty = true;
            }
            console.log(JSON.stringify(comments, null, 1));
            _this.comments = comments;
        });
    }
    CommentsPage.prototype.goToAddComment = function (comment, title) {
        console.log(JSON.stringify(comment));
        this.navCtrl.push(NewCommentPage, { id: comment.post, title: title, parent: comment.id });
    };
    CommentsPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    return CommentsPage;
}());
CommentsPage = __decorate([
    Component({
        selector: 'page-comments',
        templateUrl: 'comments.html'
    }),
    __metadata("design:paramtypes", [NavParams,
        NavController,
        RemoteServiceProvider,
        LoadingController])
], CommentsPage);
export { CommentsPage };
//# sourceMappingURL=comments.js.map