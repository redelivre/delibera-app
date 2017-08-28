import { Component } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
	selector: 'page-addpauta',
  templateUrl: 'addpauta.html'
})
export class AddPautaPage {

	pauta = {title: "", content: ""};

  TabsPage;

  constructor(public navCtrl: NavController, 
  	private serviceProvider: RemoteServiceProvider,
  	private toastCtrl: ToastController) {
  	console.log("Adicionar Pautas");

  	this.TabsPage = TabsPage;

  }

  sendPauta(tabs){
  	console.log(JSON.stringify(this.pauta, null, 1));
  	this.serviceProvider.sendPauta(this.pauta)
  	.then( pauta => {
      console.log( JSON.stringify(pauta, null, 1));
      this.presentToast();
      this.navCtrl.push(TabsPage);
    })

  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Pauta adicionada com sucesso.',
      duration: 3000
    });
    toast.present();
  }

}