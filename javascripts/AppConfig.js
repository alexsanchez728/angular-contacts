'use strict';

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
  .otherwise('/login');
});