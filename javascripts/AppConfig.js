'use strict';

app.run(function (FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
  $routeProvider
  .when("/login", {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  })
  .when("/contacts/new", {
    templateUrl: 'partials/contacts/new.html',
    controller: 'NewCtrl'
  })
  .when("/contacts/view", {
    templateUrl: 'partials/contacts/view.html',
    controller: 'ViewCtrl'
  })
  .when("/contacts/favorites", {
    templateUrl: 'partials/contacts/favorites.html',
    controller: 'FavoritesCtrl'
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