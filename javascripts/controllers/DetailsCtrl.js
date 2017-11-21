'use strict';

app.controller("DetailsCtrl", function ($location, $routeParams, $scope, ContactServices) {
  $scope.controller = "DetailsCtrl";

  $scope.contact = {};

  const getContact = () => {
    ContactServices.getSingleContact($routeParams.id).then((results) => {
      $scope.contact = results.data;
    }).catch((err) => {
      console.log("error in getSingleContact", err);
    });
  };

  getContact();

  $scope.deleteContact = (contactId) => {
    ContactServices.deleteContact(contactId).then((results) => {
      $location.path(`/contacts/view`);
    }).catch((error) => {
      console.log("error in viewCtrl-deleteContacts", error);

    });
  };

  $scope.addFavourite = (contact) => {
    contact.isFavourite = true;
    let updatedContact = ContactServices.createContact(contact);
    ContactServices.updateContact(updatedContact, contact.id).then((results) => {
      getContact();
    }).catch((error) => {
      console.log("error in favouriteClick", error);
    });
  };

  $scope.removeFavourite = (contact) => {
    contact.isFavourite = false;
    let updatedContact = ContactServices.createContact(contact);
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