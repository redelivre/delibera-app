import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { CommentsPage } from '../../pages/comments/comments';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pautas;
  duration_in_seconds;

  constructor(public navCtrl: NavController, 
    private serviceProvider: RemoteServiceProvider ) {
    this.serviceProvider.getPautas().then( pautas => {
        this.pautas = pautas;
    });
  }

  htmlToString(string) {
    return string.replace(/<\/?[^>]+(>|$)/g, "");
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
    console.log("Cheguei");
    this.navCtrl.push(CommentsPage, {id: id, title: title});
  }

}
