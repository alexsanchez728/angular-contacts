'use strict';

app.controller("FavoritesCtrl", function ($location, $rootScope, $scope, ContactServices) {
  $scope.controller = "FavoritesCtrl";

  const getFavouriteContacts = () => {
    ContactServices.getUsersFavouriteContacts($rootScope.uid).then((results) => {
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
  
  $scope.favouriteClick = (contact) => {
    // contact.isFavourite = true;
    contact.isFavourite = (contact.isFavourite ? true : false);
    let updatedContact = contact.map(contact);

    ContactServices.updateContact(updatedContact, contact.id).then((results) => {
      getFavouriteContacts();
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