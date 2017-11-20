'use strict';

app.controller("DetailsCtrl", function ($routeParams, $scope, ContactServices) {
  $scope.controller = "DetailsCtrl";

  $scope.master = {};

  const getContact = () => {
    ContactServices.getSingleContact($routeParams.id).then((results) => {
      $scope.master = results.data;
    }).catch((err) => {
      console.log("error in getSingleContact", err);
    });
  };

  getContact();

  $scope.deleteContact = (contactId) => {
    ContactServices.deleteContact(contactId).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("error in viewCtrl-deleteContacts", error);

    });
  };

  $scope.favouriteClick = (contact) => {
    // contact.isFavourite = true;
    contact.isFavourite = (contact.isFavourite ? true : false);
    let updatedContact = contact.map(contact);

    ContactServices.updateContact(updatedContact, contact.id).then((results) => {
      getContact();
    }).catch((error) => {
      console.log("error in favouriteClick", error);
    });
  };

  $scope.edit = (contactId) => {
    $location.path(`/contacts/edit/${contactId}`);
  };
});