'use strict';

app.controller("NavCtrl", function ($location, $rootScope, $scope, $window, AuthServices) {
  $scope.logoutUser = () => {
    delete $rootScope.uid;
    $window.localStorage.clear();
    AuthServices.logout();
    $location.path('./login');
  };
});