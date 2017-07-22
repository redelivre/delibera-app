// Ionic delibera-app App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'delibera-app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'delibera-app.controllers' is found in controllers.js, wpIoinc.services is in services.js
angular.module('delibera-app', [
    'ionic',
    'delibera-app.controllers',
    'delibera-app.services',
    'delibera-app.filters',
    'angular-cache',
    'wp-api-angularjs',
    'oauth1Client'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, CacheFactoryProvider, WpApiProvider, oauth1ClientProvider) {

  var url = "http://delibera.redelivre.org.br/";
  WpApiProvider.setBaseUrl(url+'wp-json');
  oauth1ClientProvider.config({
    consumerKey: 'yjfvX5h51p6k',
    consumerSecret: 'sujwkaIm0eIhsVtC52dFyDnqXyU1hD124OyjoJ6YcuvMak7R',
    requestEndpoint: url+'oauth1/request',
    authorizeEndpoint: url+'oauth1/authorize',
    accessEndpoint: url+'oauth1/access',
    oauthCallback: 'http://delibera.redelivre.org.br/success'
  });

  console.log(JSON.stringify(oauth1ClientProvider, null, 4));
  angular.extend(CacheFactoryProvider.defaults, {
    'storageMode': 'localStorage',
    'capacity': 10,
    'maxAge': 10800000,
    'deleteOnExpire': 'aggressive',
    'recycleFreq': 10000
  })

  // Native scrolling
  if( ionic.Platform.isAndroid() ) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
  }

  $stateProvider

  // sets up our default state, all views are loaded through here
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.intro', {
    url: "/intro",
    views: {
      'menuContent': {
        templateUrl: "templates/intro.html",
        controller: 'IntroCtrl'
      }
    }
  })

  // this is the first sub view, notice menuContent under 'views', which is loaded through menu.html
  .state('app.posts', {
    url: "/posts",
    views: {
      'menuContent': {
        templateUrl: "templates/posts.html",
        controller: 'PostsCtrl'
      }
    }
  })

  .state('app.bookmarks', {
    url: "/bookmarks",
    views: {
      'menuContent': {
        templateUrl: "templates/bookmarks.html",
        controller: 'BookmarksCtrl'
      }
    }
  })

  .state('app.post', {
    url: "/posts/:postId",
    views: {
      'menuContent': {
        templateUrl: "templates/post.html",
        controller: 'PostCtrl'
      }
    }
  })
  // add menu pautas
  .state('app.pautas', {
    url: "/pautas",
    views: {
      'menuContent': {
        templateUrl: "templates/pautas.html",
        controller: 'PautasCtrl'
      }
    }
  })

  .state('app.pauta', {
    url: "/pautas/:pautaId",
    views: {
      'menuContent': {
        templateUrl: "templates/pauta.html",
        controller: 'PautaCtrl'
      }
    }
  })
  .state('app.custom', {
    url: "/custom",
    views: {
      'menuContent': {
        templateUrl: "templates/custom.html"
      }
    }
  })

  .state('app.tabs', {
    url: "/tabs",
    views: {
      'menuContent': {
        templateUrl: "templates/tabs.html",
        controller: 'TabsCtrl'
      }
    }
  })

  .state('app.login', {
    url: "/login",
    views: {
      'menuContent': {
        templateUrl: "templates/login.html",
        controller: 'loginCtrl'
      }
    }
  })

.state('app.logged', {
  url: "/logged",
  views: {
    'menuContent': {
      templateUrl: "templates/logged.html",
      controller: 'loggedCtrl'
    }
  }
})

.state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "templates/settings.html"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/intro');
});
