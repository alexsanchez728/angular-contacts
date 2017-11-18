'use strict';

app.service("ContactServices", function ($http, $q, FIREBASE_CONFIG) {

  const getUsersContacts = (userUid) => {
    let contacts = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbContacts = results.data;
        Object.keys(fbContacts).forEach((key) => {
          fbContacts[key].id = key;
        });
        resolve(fbContacts);
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

  return {
    getUsersContacts,
    postNewContact,
    deleteContact
  };
});