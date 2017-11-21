'use strict';

app.controller("EditCtrl", function ($location, $routeParams, $rootScope, $scope, ContactServices) {
  $scope.controller = "EditCtrl";

  $scope.contact = {};

  const getContact = () => {
    ContactServices.getSingleContact($routeParams.id).then((results) => {
      $scope.contact = results.data;
    }).catch((err) => {
      console.log("error in getSingleContact", err);
    });
  };

  getContact();
  
  $scope.update = ((editedContact) => {
    $scope.contact = angular.copy(editedContact);
    let updatedContact = ContactServices.createContact(editedContact);
    ContactServices.updateContact(updatedContact, $routeParams.id).then((results) => {
        $location.path('/contacts/view');
      }).catch((err) => {
        console.log("error in updateContact", err);
      }); // end post
  }); // end .update()
}); // end controller