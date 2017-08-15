import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import api from 'wordpress-rest-api-oauth-1';

var url = "http://teste3.redelivre.ethymos.com.br/";
const demoApi = new api({
        url: url,
        callbackURL: 'http://teste3.redelivre.ethymos.com.br/delibera-api-login-callback',
        credentials: {
            client: {
                public: 'Aqlujy7OtUsA',
                secret: 'K9o0wJhLNucDKSw0bXCAlbxEucY0oihKURNk7syRoe0otAzc'
            }
        }
});

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  requestLogin() {
    
  
    
    
    
    /*demoApi.getRequestToken().then( function() {
      console.log( 'All API requests are now authenticated.' )
    });*/
    
    //this.demoApi.removeCredentials();
    
    /*demoApi.getRequestToken().then( token => {
      console.log( JSON.stringify( demoApi.config.credentials ) );
      console.log( JSON.stringify(token) );
      /*demoApi.config.credentials.token.public = token.token.oauth_token;
      console.log( JSON.stringify( demoApi.config.credentials ) );
      demoApi.saveCredentials();
    });*/
    
    /*demoApi.restoreCredentials();
    console.log("C1:" + JSON.stringify( demoApi.config.credentials ) );
    console.log( JSON.stringify( demoApi.get( '/wp/v2/users/me' ) ) );*/
    
    //demoApi.restoreCredentials();
    demoApi.authorize().then( function() {
      demoApi.saveCredentials();
      console.log('H1');
    });
    
  }
  requestCreds() {
    demoApi.restoreCredentials();
    console.log( JSON.stringify( demoApi.config.credentials ) );
  }
  requestMe() {
    demoApi.restoreCredentials();
    demoApi.get( '/wp/v2/users/me' ).then( user => {
        console.log( JSON.stringify( user ) );
        alert( JSON.stringify( user ) );
    });
  }
  requestRm() {
    demoApi.removeCredentials();
    alert('ok, Credentials removed!');
    
  }
}
