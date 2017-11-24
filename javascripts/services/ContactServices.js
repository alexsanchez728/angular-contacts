'use strict';

app.service("ContactServices", function ($http, $q, FIREBASE_CONFIG) {

  const getUsersContacts = (userUid) => {
    let myContacts = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let contacts = results.data;
        Object.keys(contacts).forEach((key) => {
          contacts[key].id = key;
          myContacts.push(contacts[key]);
        });
        resolve(myContacts);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const getSingleContact = (contactId) => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
  };

  const getUsersFavouriteContacts = (userUid) => {
    let favs = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbContacts = results.data;
        Object.keys(fbContacts).forEach((key) => {
          fbContacts[key].id = key;
          if (fbContacts[key].isFavourite) {
            favs.push(fbContacts[key]);
          }
        });
        resolve(favs);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const updateContact = (contact, contactId) => {
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`, JSON.stringify(contact));
  };

  const postNewContact = (newContactInfo) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContactInfo));
  };

  const deleteContact = (contactId) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);

  };

  const createContact = (contactInfo) => {
    return {
      "firstName": contactInfo.firstName,
      "lastName": contactInfo.lastName,
      "preferedName": contactInfo.preferedName,
      "email": contactInfo.email,
      "primaryPhone": contactInfo.primaryPhone,
      "address": contactInfo.address,
      "birthday": contactInfo.birthday,
      "isFavourite": contactInfo.isFavourite,
      "uid": contactInfo.uid
    };
  };

  return {
    getUsersContacts,
    getSingleContact,
    getUsersFavouriteContacts,
    postNewContact,
    deleteContact,
    updateContact,
    createContact
  };
});