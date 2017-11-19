'use strict';

app.controller("ViewCtrl", function ($location, $rootScope, $scope, ContactServices) {
  $scope.controller = "ViewCtrl";

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

  $scope.add = () => {
    $location.path(`/contacts/new`);
  };

  $scope.favouriteSelected = (contact) => {
    ContactServices.addFavourite(contact).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("error in favouriteSelected", error);
    });
  };

  $scope.favouriteUnselected = (contact) => {
    ContactServices.removeFavourite(contact).then((retults) => {
      getContacts();
    }).catch((error) => {
      console.log("error in favouriteUnselected", error);
    });
  };

  $scope.edit = (contactId) => {
    $location.path(`/contacts/edit/${contactId}`);
  };

  $scope.details = (contactId) => {
    $location.path(`/contacts/details/${contactId}`);
  };

});