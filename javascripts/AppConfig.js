'use strict';

let isAuth = (AuthServices) => new Promise ((resolve, reject) => {
    if (AuthServices.isAuthenticated()){
      resolve();
    } else {
      reject();
    }
  });

app.run(function ($location, $rootScope, FIREBASE_CONFIG, AuthServices) {
  firebase.initializeApp(FIREBASE_CONFIG);

  //watch method that fires on change of a route.  3 inputs. 
  //event is a change event
  //currRoute is information about your current route
  //prevRoute is information about the route you came from
  $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
    // checks to see if there is a current user
    var logged = AuthServices.isAuthenticated();

    var appTo;

    // to keep error from being thrown on page refresh
    if (currRoute.originalPath) {
      // check if the user is going to the auth page = currRoute.originalPath
      // if user is on auth page then appTo is true
      // if it finds something other than /auth it return a -1 and -1!==-1 so resolves to false
      appTo = currRoute.originalPath.indexOf('/login') !== -1;
    }

    //if not on /auth page AND not logged in redirect to /auth
    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/login');
    }
  });
});

app.config(function($routeProvider) {
  $routeProvider
  .when("/login", {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  })
  .when("/contacts/new", {
    templateUrl: 'partials/contacts/new.html',
    controller: 'NewCtrl',
    resolve: {isAuth}
  })
  .when("/contacts/view", {
    templateUrl: 'partials/contacts/view.html',
    controller: 'ViewCtrl',
    resolve: {isAuth}
  })
  .when("/contacts/favorites", {
    templateUrl: 'partials/contacts/favorites.html',
    controller: 'FavoritesCtrl',
    resolve: {isAuth}
  })
  .when("/contacts/edit/:id", {
    templateUrl: 'partials/contacts/edit.html',
    controller: 'EditCtrl'
  })
  .when("/contacts/details/:id", {
    templateUrl: 'partials/contacts/details.html',
    controller: 'DetailsCtrl'
  })
  .otherwise('/login');
});