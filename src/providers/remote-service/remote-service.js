var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import api from 'wordpress-rest-api-oauth-1';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
var url = "http://delibera.redelivre.org.br/";
var demoApi = new api({
    url: url,
    callbackURL: 'http://term.ie/oauth/example/client.php',
    credentials: {
        client: {
            public: 'HkkGJDLbXRGe',
            secret: 'fmYHiqj3XsDBFb9ga06lNVkZ0tLOSQJ1alYnX0CHBpat3sjU'
        }
    }
});
var RemoteServiceProvider = (function () {
    function RemoteServiceProvider() {
        console.log('Provider of Delibera RedeLivre');
        console.log(demoApi);
    }
    // Pauta
    RemoteServiceProvider.prototype.getPautaInfo = function () {
        demoApi.restoreCredentials();
        return demoApi.get('/wp/v2/types/pauta');
    };
    RemoteServiceProvider.prototype.getPautas = function () {
        demoApi.restoreCredentials();
        return demoApi.get('/wp/v2/pauta');
    };
    RemoteServiceProvider.prototype.like = function (id) {
        demoApi.restoreCredentials();
        return demoApi.get(demoApi.get('/wp/v2/pauta/' + id + '/like'));
    };
    RemoteServiceProvider.prototype.sendPauta = function (pauta) {
        console.log(pauta);
        demoApi.restoreCredentials();
        return demoApi.post('/wp/v2/pauta', pauta);
    };
    // Basic Service
    RemoteServiceProvider.prototype.isLoggedIn = function () {
        return true;
    };
    // Base methods
    RemoteServiceProvider.prototype.requestLogin = function () {
        demoApi.authorize().then(function () {
            demoApi.saveCredentials();
            console.log('H1');
        });
    };
    RemoteServiceProvider.prototype.requestCreds = function () {
        demoApi.restoreCredentials();
        //console.log( JSON.stringify( demoApi.config.credentials ) );
    };
    RemoteServiceProvider.prototype.requestMe = function () {
        demoApi.restoreCredentials();
        demoApi.get('/wp/v2/users/me').then(function (user) {
            console.log(user);
            alert(JSON.stringify(user));
        });
    };
    RemoteServiceProvider.prototype.requestRm = function () {
        demoApi.removeCredentials();
        alert('ok, Credentials removed!');
    };
    return RemoteServiceProvider;
}());
RemoteServiceProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], RemoteServiceProvider);
export { RemoteServiceProvider };
//# sourceMappingURL=remote-service.js.map