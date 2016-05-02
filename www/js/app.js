// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','app.routes', 'app.songServices', 'app.directives','app.songFilter','app.songController','app.gigController', 'app.artistController','app.recordLabelController','app.albumController','app.settingController','app.bandMemberController'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.song', {
    url: '/songs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/songList.html',
        controller: 'songCtrl'
      }
    }
  })

  .state('menu.artist', {
    url: '/artists',
    views: {
      'side-menu21': {
        templateUrl: 'templates/songList.html',
        controller: 'songCtrl'
      }
    }
  })

//the menu.home / home.html template will have the tabs nav element on it, need to make a html for it
//this state doesn't need anything in the controller it's a similar example to the DashCtrl
// the meny.home will also have the script src="" to the other templates, it will have the script tags

  // .state('menu.home', {
  //   url: '/home',
  //   views: {
  //   templateUrl: 'templates/home.html',
  //   }
  // })

//need to make the html specically for songlist.html
  // .state('menu.home.song', {
  //   url: '/song',
  //   views: {
  //     'tabs-song': {
  //       templateUrl: 'templates/songlist.html',
  //       controller: 'songCtrl'
  //     }
  //   }
  // })

//need to make the html specifically for the artist.html
  // .state('menu.home.artist', {
  //   url: '/artist',
  //   views: {
  //     'tabs-artist': {
  //       templateUrl: 'templates/artistlist.html',
  //       controller: 'ArtistCtrl'
  //     }
  //   }
  // })


  .state('menu.gigs', {
    url: '/gigs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gigs.html',
        controller: 'gigCtrl'
      }
    }
  })

  .state('gigsCalendar', {
    url: '/gigs/calendar',
    templateUrl: 'templates/gigsCalendar.html',
    controller: 'gigsCtrl'
  })


  .state('menu.addNewSong', {
    url: '/addNewSong',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewSong.html',
        controller: 'songCtrl'
      }
    }
  })

  .state('menu.editSong', {
    url: '/song/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editSong.html',
        controller: 'songCtrl'
      }
    }
  })

  .state('menu.songContent', {
    url: '/song/content/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/songContent.html',
        controller: 'songCtrl'
      }
    }
  })

  .state('menu.addNewArtist', {
    url: '/addNewArtist',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewArtist.html',
        controller: 'artistCtrl'
      }
    }
  })

  .state('menu.editArtist', {
    url: '/artist/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editArtist.html',
        controller: 'artistCtrl'
      }
    }
  })

  .state('menu.artistInformation', {
    url: '/artist/info/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/artistInformation.html',
        controller: 'artistCtrl'
      }
    }
  })

  .state('menu.artistContext', {
    url: '/artist/context/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/artistContext.html',
        controller: 'artistCtrl'
      }
    }
  })

  .state('menu.bandMembers', {
    url: '/artist/:id/members',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bandMembers.html',
        controller: 'bandMemberCtrl'
      }
    }
  })

  .state('menu.recordLabels', {
    url: '/recordLabels',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recordLabels.html',
        controller: 'recordLabelCtrl'
      }
    }
  })


  .state('menu.addNewAlbum', {
    url: '/addNewAlbum',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewAlbum.html',
        controller: 'albumCtrl'
      }
    }
  })

  .state('menu.editAlbum', {
    url: '/album/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editAlbum.html',
        controller: 'albumCtrl'
      }
    }
  })

  .state('menu.albumPage', {
    url: '/album/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/albumPage.html',
        controller: 'albumCtrl'
      }
    }
  })

  .state('addRecordLabel', {
    url: '/addRecordLabel',
    templateUrl: 'templates/addRecordLabel.html',
    controller: 'recordLabelCtrl'
  })

  .state('menu.editRecordLabel', {
    url: '/recordLabels/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editRecordLabel.html',
        controller: 'recordLabelCtrl'
      }
    }
  })

  .state('menu.gigDetails', {
    url: '/gig/details/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gigDetails.html',
        controller: 'gigCtrl'
      }
    }
  })

  .state('menu.addNewGig', {
    url: '/addNewGig',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewGig.html',
        controller: 'gigCtrl'
      }
    }
  })

  .state('dateOfTheGigs', {
    url: '/gigs/day/:id',
    templateUrl: 'templates/dateOfTheGigs.html',
    controller: 'gigCtrl'
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingCtrl'
      }
    }
  })


  .state('menu.privacyPolicy', {
    url: '/privacyPolicy',
    views: {
      'side-menu21': {
        templateUrl: 'templates/privacyPolicy.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('menu.serviceTerms', {
    url: '/serviceTerms',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviceTerms.html',
        controller: 'settingCtrl'
      }
    }
  })



  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'settingCtrl'
      }
    }
  });

$urlRouterProvider.otherwise('/side-menu/songs');



});