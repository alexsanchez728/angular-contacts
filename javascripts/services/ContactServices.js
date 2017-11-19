'use strict';

app.service("ContactServices", function ($http, $q, FIREBASE_CONFIG) {

  const getUsersContacts = (userUid) => {
    let contacts = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        contacts = results.data;
        Object.keys(contacts).forEach((key) => {
          contacts[key].id = key;
        });
        resolve(contacts);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const postNewContact = (newContactInfo) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContactInfo));

  };

  const deleteContact = (contactId) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);

  };

  const addFavourite = (contact) => {
    console.log("oldContact", contact);
    contact.isFavourite = true;
    let updatedContact = contact.map(contact);
    console.log("newContact", updatedContact);
  };

const removeFavourite = (contact) => {
  console.log("oldContact", contact);
  contact.isFavourite = false;
  let updatedContact = contact.map(contact);
  console.log("newContact", updatedContact);
};


  return {
    getUsersContacts,
    postNewContact,
    deleteContact,
    addFavourite,
    removeFavourite
  };
});