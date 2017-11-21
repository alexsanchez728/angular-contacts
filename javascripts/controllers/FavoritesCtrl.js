'use strict';

app.controller("FavoritesCtrl", function ($location, $rootScope, $scope, ContactServices) {
  $scope.controller = "FavoritesCtrl";

  $scope.contacts = {};

  const getFavouriteContacts = () => {
    ContactServices.getUsersFavouriteContacts($rootScope.uid).then((results) => {
      console.log("results in favctrl", results);
        $scope.contacts = results;

    }).catch((err) => {
      console.log("error in viewCtrl-getContacts", err);
    });
  };

  getFavouriteContacts();

  $scope.deleteContact = (contactId) => {
    ContactServices.deleteContact(contactId).then((results) => {
      getFavouriteContacts();
    }).catch((error) => {
      console.log("error in viewCtrl-deleteContacts", error);
    });
  };
  
  $scope.addFavourite = (contact) => {
    contact.isFavourite = true;
    let updatedContact = ContactServices.createContact(contact);
    ContactServices.updateContact(updatedContact, contact.id).then((results) => {
      getFavouriteContacts();
    }).catch((error) => {
      console.log("error in favouriteClick", error);
    });
  };

  $scope.removeFavourite = (contact) => {
    contact.isFavourite = false;
    let updatedContact = ContactServices.createContact(contact);
    ContactServices.updateContact(updatedContact, contact.id).then((results) => {
      getFavouriteContacts();
    }).catch((error) => {
      console.log("error in favouriteClick", error);
    });
  };
  $scope.edit = (contactId) => {
    $location.path(`/contacts/edit/${contactId}`);
  };

  $scope.detail = (contactId) => {
    $location.path(`/contacts/details/${contactId}`);
  };
});