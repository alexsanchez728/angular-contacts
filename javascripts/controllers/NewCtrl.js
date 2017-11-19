'use strict';

app.controller("NewCtrl", function ($location, $rootScope, $scope, ContactServices) {

  $scope.master = {};
  
  $scope.update = ((user) => {
    if (user !== undefined && Object.keys(user).length === 7) {
      user.uid = $rootScope.uid;
      $scope.master = angular.copy(user);
      ContactServices.postNewContact($scope.master).then(() => {
        $location.path('/contacts/view');
      }).catch((err) => {
        console.log("error in postNewContact", err);
      }); // end post
    }
  }); // end .update()
}); // end controller