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
    let updatedContact = ContactServices.createContact(contact);
    updatedContact.isFavourite = true;
    ContactServices.updateContact(updatedContact, $routeParams.id).then((results) => {
      getContact();
    }).catch((error) => {
      console.log("error in favouriteClick", error);
    });
  };

  $scope.removeFavourite = (contact) => {
    let updatedContact = ContactServices.createContact(contact);
    updatedContact.isFavourite = false;
    ContactServices.updateContact(updatedContact, $routeParams.id).then((results) => {
      getContact();
    }).catch((error) => {
      console.log("error in favouriteClick", error);
    });
  };

  $scope.edit = (contact) => {
    $location.path(`/contacts/edit/${$routeParams.id}`);
  };
});