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

  $scope.addFavourite = (contact) => {
    contact.isFavourite = true;
    let updatedContact = ContactServices.createContact(contact);
    ContactServices.updateContact(updatedContact, contact.id).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("error in favouriteClick", error);
    });
  };

  $scope.removeFavourite = (contact) => {
    contact.isFavourite = false;
    let updatedContact = ContactServices.createContact(contact);
    ContactServices.updateContact(updatedContact, contact.id).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("error in favouriteClick", error);
    });
  };

  $scope.edit = (contactId) => {
    $location.path(`/contacts/edit/${contactId}`);
  };

  $scope.group = (contact, groupName) => {
    contact.contactGroup = groupName;
    let updatedContact = ContactServices.createContact(contact);
    ContactServices.updateContact(updatedContact, contact.id).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("error in favouriteClick", error);
    });
  };

  $scope.detail = (contactId) => {
    $location.path(`/contacts/details/${contactId}`);
  };

      
});