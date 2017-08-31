import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';


@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {

	comments;
	title;
  empty;
  comment = {content: ""};

  constructor(public navParams: NavParams,
  	public navCtrl: NavController,
  	private serviceProvider: RemoteServiceProvider,
    public loadingCtrl: LoadingController) {
      this.presentLoading();
  	  let id = this.navParams.get('id');
  	  this.title = this.navParams.get('title');
	  	this.serviceProvider.getPautaComments(id)
		  	.then( comments => {
          if (comments.length === 0){this.empty = true}
		  	  console.log(JSON.stringify(comments, null, 1))
		      this.comments = comments;
		    });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  addComment() {
    console.log(this.comment);
  }

}