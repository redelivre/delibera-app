import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { CommentsPage } from '../../pages/comments/comments';
import { NewCommentPage } from '../../pages/comments/addcomment';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pautas;
  duration_in_seconds;
  like_badge; unlike_badge;

  constructor(public navCtrl: NavController, 
    private serviceProvider: RemoteServiceProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    this.presentLoading();
    this.serviceProvider.credentials("1");
    if (this.serviceProvider.isLoggedOff()){
      //this.serviceProvider.requestLogin();
    }
    this.serviceProvider.credentials("2");
    this.serviceProvider.getPautas().then( pautas => {
      this.pautas = pautas;
    });
  }

  status(name) {
    if (name === "comresolucao"){
      return "Resolução";
    }
    else if (name === "relatoria") {
      return "Relatoria";
    }
    else if (name === "discussao"){
      return "Discussão";
    }
  }

  formatDateOld(date) {
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
  }

  formatDate(date) {
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
  }

  isLoggedIn() {
    return this.serviceProvider.isLoggedIn();
  }

  goToComments(id, title){
    this.navCtrl.push(CommentsPage, {id: id, title: title});
  }

  like(pauta){
    this.serviceProvider.like(pauta.id).then( like => {
      console.log(JSON.stringify(like, null, 1));
      if (pauta.liked === true){
        pauta.liked = false;
        pauta.likes = parseInt(pauta.likes) - 1;
      } else {
        pauta.liked = true;
        pauta.likes = parseInt(pauta.likes) + 1;
      }
      this.presentToast('Pauta curtida');
    }, like => {console.log(JSON.stringify(like, null, 1));});
  }

  unlike(pauta){
    this.serviceProvider.unlike(pauta.id).then( unlike => {
      console.log(JSON.stringify(unlike, null, 1));
      if (pauta.unliked === true){
        pauta.unliked = false;
        pauta.unlikes = parseInt(pauta.unlikes) - 1;
      } else {
        pauta.unliked = true;
        pauta.unlikes = parseInt(pauta.unlikes) + 1;
      }
      
      this.presentToast('Pauta descurtida');
    }, unlike => {console.log(JSON.stringify(unlike, null, 1));});
  }

  goToAddComment(id, title){
    this.navCtrl.push(NewCommentPage, {id: id, title: title});
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 3000
    });
    loader.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  like_number(id){
    this.serviceProvider.getNumberLikes(id).then( like => {
      this.like_badge = like;
    }, like => {console.log(JSON.stringify(like, null, 1));});
  }

  unlike_number(id){
    this.serviceProvider.getNumberUnlikes(id).then( unlike => {
      this.unlike_badge = unlike;
    }, unlike => {console.log(JSON.stringify(unlike, null, 1));});
  }

}
