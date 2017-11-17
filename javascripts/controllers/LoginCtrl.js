'use strict';

app.controller("LoginCtrl", function ($location, $rootScope, $scope, AuthServices) {
  $scope.authenticate = () => {
    AuthServices.authenticateGoogle().then((result) => {
      $rootScope.uid = result.user.uid;
      $scope.$apply(() => {
        $location.url("/contacts/view");
      });
    }).catch((error) => {
      console.log("error in authenticateGoogle", error);
    });
  };
});