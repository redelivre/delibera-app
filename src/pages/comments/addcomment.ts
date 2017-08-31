import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';


@Component({
  selector: 'page-new-comment',
  templateUrl: 'addcomment.html'
})
export class NewCommentPage {

  comment = {content: "", post: ""};
  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    private serviceProvider: RemoteServiceProvider,
    public toastCtrl: ToastController) {
  }

  newComment() {
    this.comment.post = this.navParams.data.id
    console.log(JSON.stringify(this.comment));
    this.serviceProvider.newComment(this.comment).then( like => {
      console.log(JSON.stringify(like, null, 1));
      this.presentToast('Comentário adicionado com sucesso.');
    }, like => {console.log(JSON.stringify(like, null, 1));});
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}