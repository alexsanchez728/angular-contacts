'use strict';

app.controller("NewCtrl", function ($rootScope, $scope) {

  $scope.master = {};
  
  $scope.update = ((user) => {
    if (user !== undefined && Object.keys(user).length === 6) {
      user.uid = $rootScope.uid;
      $scope.master = angular.copy(user);
      console.log("master", $scope.master);
    }
  });
});