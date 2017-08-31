import { Injectable } from '@angular/core';
import api from 'wordpress-rest-api-oauth-1';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

var url = "http://delibera.redelivre.org.br/";
const demoApi = new api({
        url: url,
        callbackURL: 'http://term.ie/oauth/example/client.php',
        credentials: {
            client: {
                public: 'HkkGJDLbXRGe',
                secret: 'fmYHiqj3XsDBFb9ga06lNVkZ0tLOSQJ1alYnX0CHBpat3sjU'
            }
        }
});

@Injectable()
export class RemoteServiceProvider {

  constructor() {
    console.log('Provider of Delibera RedeLivre');
    console.log(demoApi);
  }

  // Pauta

  getPautaInfo(){
  	demoApi.restoreCredentials();
    return demoApi.get( '/wp/v2/types/pauta' );
  }

  getPautas(){
    demoApi.restoreCredentials();
    return demoApi.get( '/wp/v2/pauta' );
  }

  like(id){
    demoApi.restoreCredentials();
    console.log('/wp/v2/pautas/'+id+'/like');
    return demoApi.post( '/wp/v2/pautas/'+id+'/like' );
  }

  unlike(id){
    demoApi.restoreCredentials();
    console.log('/wp/v2/pautas/'+id+'/like');
    return demoApi.post( '/wp/v2/pautas/'+id+'/unlike' );
  }

  sendPauta(pauta){
    demoApi.restoreCredentials();
    return demoApi.post( '/wp/v2/pauta', pauta );
  }

  getPautaComments(id){
    demoApi.restoreCredentials();
    return demoApi.get( '/wp/v2/comments?post='+id );
  }

  // Basic Service

  isLoggedIn(){
    if (Object.keys(demoApi.config.credentials).length === 1){
      return false;
    }
    else if (Object.keys(demoApi.config.credentials).length > 1) {
      return true;
    }

  }

  isLoggedOff(){
    if (Object.keys(demoApi.config.credentials).length === 1){
      return true;
    }
    else if (Object.keys(demoApi.config.credentials).length > 1) {
      return false;
    }

  }

  // Base methods
  requestLogin() {
    demoApi.authorize().then( function() {
      demoApi.saveCredentials();
      console.log('H1');
    });
    
  }
  requestCreds() {
    demoApi.restoreCredentials();
    //console.log( JSON.stringify( demoApi.config.credentials ) );
  }
  requestMe() {
    demoApi.restoreCredentials();
    demoApi.get( '/wp/v2/users/me' ).then( user => {
        console.log(user);
        alert( JSON.stringify( user ) );
    });
  }
  requestRm() {
    demoApi.removeCredentials();
    alert('ok, Credentials removed!');
  }

}
