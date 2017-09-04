import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, Content, ToastController} from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { NewCommentPage } from '../../pages/comments/addcomment';


@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {
  @ViewChild(Content) content: Content;
	comments;
	title;
  empty;
  comment = {content: ""};

  constructor(public navParams: NavParams,
  	public navCtrl: NavController,
  	private serviceProvider: RemoteServiceProvider,
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController) {
      this.presentLoading("Aguarde...");
  	  let id = this.navParams.get('id');
  	  this.title = this.navParams.get('title');
	  	this.serviceProvider.getPautaComments(id)
		  	.then( comments => {
          if (comments.length === 0){this.empty = true}
		      this.comments = comments;
		    });
  }

  goToAddComment(comment, title){
    this.navCtrl.push(NewCommentPage, {id: comment.post, title: title, parent: comment.id});
  }

  presentLoading(msg) {
    let loader = this.loadingCtrl.create({
      content: msg,
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

  isLoggedIn() {
    return this.serviceProvider.isLoggedIn();
  }

  like(comment){
    this.serviceProvider.likeComment(comment.id).then( like => {
      if (comment.liked === true){
        comment.liked = false;
        comment.likes = parseInt(comment.likes) - 1;
      } else {
        comment.liked = true;
        comment.likes = parseInt(comment.likes) + 1;
      }
      this.presentToast('Pauta curtida');
    }, like => {
      console.log(JSON.stringify(like, null, 1));
    });
  }

  unlike(comment){
    this.serviceProvider.unlikeComment(comment.id).then( unlike => {
      if (comment.unliked === true){
        comment.unliked = false;
        comment.unlikes = parseInt(comment.unlikes) - 1;
      } else {
        comment.unliked = true;
        comment.unlikes = parseInt(comment.unlikes) + 1;
      }
      
      this.presentToast('Pauta descurtida');
    }, unlike => {console.log(JSON.stringify(unlike, null, 1));});
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

  scrollTo(element:string) {
    let yOffset = document.getElementById(element).offsetTop;
    this.content.scrollTo(0, yOffset+500, 10000)
  }

}