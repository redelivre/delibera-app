import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { HomePage } from '../../pages/home/home';


@Component({
  selector: 'page-new-comment',
  templateUrl: 'addcomment.html'
})
export class NewCommentPage {

  comment = {content: "", post: "", parent: ""};
  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    private serviceProvider: RemoteServiceProvider,
    public toastCtrl: ToastController) {
  }

  newComment() {
    this.comment.post = this.navParams.data.id
    if (this.navParams.data.hasOwnProperty("parent")){
      if (this.navParams.data.parent !== ""){
          this.comment.parent = this.navParams.data.parent;
      }
    }
    else {
      delete this.comment.parent;
    }
    console.log(JSON.stringify(this.comment));
    this.serviceProvider.newComment(this.comment).then( like => {
      console.log(JSON.stringify(like, null, 1));
      this.presentToast('Comentário adicionado com sucesso.');
      this.navCtrl.push(HomePage);
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