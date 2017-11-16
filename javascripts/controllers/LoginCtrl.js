'use strict';

app.controller("LoginCtrl", function ($location, $rootScope, $scope, AuthService) {
  $scope.authenticate = () => {
    AuthService.authenticateGoogle().then((result) => {
      $rootScope.uid = result.user.uid;
      $scope.$apply(() => {
        $location.url("/view");
      });
    }).catch((error) => {
      console.log("error in authenticateGoogle", error);
    });
  };
});