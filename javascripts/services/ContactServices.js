'use strict';

app.service("ContactServices", function ($http, $q, FIREABASE_CONFIG) {

  const getUsersContacts = (userUid) => {
    let contacts = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREABASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbContacts = results.data;
        Object.keys(fbContacts).forEach((key) => {
          fbContacts[key].id = key;
          resolve(contacts);
        });
      }).catch((error) => {
        reject(error);
      });
    });
  };



  const postNewContact = (newContactInfo) => {
    return $http.post(`${FIREABASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContactInfo));

};

  const deleteContact = (contactId) => {
    return $http.delete(`${FIREABASE_CONFIG.databaseURL}/contacts/${contactId}.json`);

  };

});