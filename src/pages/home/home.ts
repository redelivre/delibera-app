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
    this.presentLoading("Aguarde..");
    //this.serviceProvider.credentials("1");
    if (this.serviceProvider.isLoggedOff()){
      //this.serviceProvider.requestLogin();
    }
    //this.serviceProvider.credentials("2");
    this.serviceProvider.getPautas().then( pautas => {
      this.pautas = pautas;
    });
  }

  status(name) {
    if (name === "comresolucao"){
      return "Com Resolução";
    }
    else if (name === "relatoria") {
      return "Relatoria";
    }
    else if (name === "validacao"){
      return "Validação";
    }
    else if (name === "encaminhamento" || name === "encaminhamento_selecionado"){
      return "Encaminhamento";
    }
    else if (name === "voto"){
      return "Votação";
    }
    else if (name === "resolucao"){
      return "Resolução";
    }
    else if (name === "discussao"){
      return "Discussão";
    }
  }

  show(status){
    console.log("Status: "+status)
    if (this.isLoggedIn() && status === "resolucao"){
      return false;
    }
    else if (this.isLoggedIn() && status === "discussao"){
      return true;
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

    return day + ' de ' + monthNames[monthIndex] + ' de ' + year;
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
    }, like => {console.log(JSON.stringify(like, null, 1));});
  }

  unlike(pauta){
    this.serviceProvider.unlike(pauta.id).then( unlike => {
      if (pauta.unliked === true){
        pauta.unliked = false;
        pauta.unlikes = parseInt(pauta.unlikes) - 1;
      } else {
        pauta.unliked = true;
        pauta.unlikes = parseInt(pauta.unlikes) + 1;
      }
    }, unlike => {console.log(JSON.stringify(unlike, null, 1));});
  }

  goToAddComment(id, title){
    this.navCtrl.push(NewCommentPage, {id: id, title: title});
  }

  presentLoading(msg) {
    let loader = this.loadingCtrl.create({
      content: msg,
      duration: 3000
    });
    loader.present();
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
