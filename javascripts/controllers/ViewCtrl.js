'use strict';

app.controller("ViewCtrl", function ($location, $rootScope, $scope, ContactServices) {

  const getContacts = () => {
    
    ContactServices.getUsersContacts($rootScope.uid).then((results) => {
      $scope.contacts = results;
    }).catch((err) => {
      console.log("error in viewCtrl-getContacts", err);
    });
  };

getContacts();

  $scope.deleteContact = (contactId) => {
    ContactServices.deleteContact(contactId).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("error in viewCtrl-deleteContacts", error);
      
    });
  };

  const add = () => {
    $location.path(`/contacts/new`);
  };
});