'use strict';

app.controller("EditCtrl", function ($location, $routeParams, $rootScope, $scope, ContactServices) {
  $scope.controller = "EditCtrl";

  $scope.master = {};

  const getContact = () => {
    ContactServices.getSingleContact($routeParams.id).then((results) => {
      $scope.master = results.data;
    }).catch((err) => {
      console.log("error in getSingleContact", err);
    });
  };

  getContact();
  
  $scope.update = ((user) => {
    if (user !== undefined && Object.keys(user).length === 7) {
      $scope.master = angular.copy(user);
      ContactServices.updateContact($scope.master, user.uid).then(() => {
        $location.path('/contacts/view');
      }).catch((err) => {
        console.log("error in updateContact", err);
      }); // end post
    }
  }); // end .update()
}); // end controller