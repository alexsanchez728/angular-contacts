'use strict';

app.controller("ViewCtrl", function ($rootScope, $scope, ContactServices) {
  $scope.movies = [];

  const getContacts = () => {
    
    ContactServices.getUsersContacts($rootScope.uid).then((results) => {
      $scope.contacts = results;
    }).catch((err) => {
      console.log("error in viewCtrl-getContacts", err);
    });
  };

getContacts();

  $scope.deleteContact = (contactId) => {
    console.log("contactid", contactId);
    ContactServices.deleteContact(contactId).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("error in viewCtrl-deleteContacts", error);
      
    });
  };
});