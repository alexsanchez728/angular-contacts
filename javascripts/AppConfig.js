'use strict';

// app.run(function (FIREABASE_CONFIG) {
//   firebase.initializeApp(FIREABASE_CONFIG);
// });


app.config(function($routeProvider) {
  $routeProvider
  .when("/login", {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  })
  .when("/new", {
    templateUrl: 'partials/new.html',
    controller: 'NewCtrl'
  })
  .when("/view", {
    templateUrl: 'partials/view.html',
    controller: 'ViewCtrl'
  })
  .when("/favorites", {
    templateUrl: 'partials/favorites.html',
    controller: 'FavoritesCtrl'
  })
  .otherwise('/login');
});