import types from '../constants/';


function create_UUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}


const actions = {
  submitContact(text) {
    return {
      type: types.SUBMIT_CONTACT,
      id: create_UUID(),
      text,
    };
  },

  deleteContact(id) {
    return {
      type: types.DELETE_CONTACT,
      id,
    };
  },

  undeleteContact() {
    return {
      type: types.UNDELETE_CONTACT,
    };
  },

  inputChanged(inputText) {
    return {
      type: types.INPUT_CHANGED,
      inputText,
    };
  },
  
  fetchContacts() {
    return (dispatch) => {
      return fetch(`http://localhost:8080/contacts`)
        // We get the API response and receive data in JSON format...
        .then(response => response.json())
        // ...then we update the users state
        .then(data => {
          dispatch({ type: types.INIT_CONTACTS, contacts: data })
        })
        // Catch any errors we hit and update the app
        .catch(error => dispatch({ type: types.INIT_CONTACTS, contacts: [] }));
    };
  },
};

export default actions;
