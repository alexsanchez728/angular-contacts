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

  $scope.favouriteClick = (contact) => {
    // contact.isFavourite = true;
    contact.isFavourite = (contact.isFavourite ? true : false);
    let updatedContact = contact.map(contact);

    ContactServices.updateContact(updatedContact, contact.id).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("error in favouriteClick", error);
    });
  };

  $scope.edit = (contactId) => {
    $location.path(`/contacts/edit/${contactId}`);
  };

  $scope.details = (contactId) => {
    $location.path(`/contacts/details/${contactId}`);
  };

      
    });