import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';


@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {

	comments;
	title;

  constructor(public navParams: NavParams,
  	public navCtrl: NavController,
  	private serviceProvider: RemoteServiceProvider ) {
  	  let id = this.navParams.get('id');
  	  this.title = this.navParams.get('title');
  	  console.log("Meu id:" + this.navParams.get('id') );
	  	this.serviceProvider.getPautaComments(id)
		  	.then( comments => {
		  			console.log(JSON.stringify(comments, null, 1))
		        this.comments = comments;
		    });
  }

}