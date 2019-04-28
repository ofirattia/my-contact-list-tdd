import types from '../constants/';

export const initialState = {
  contacts: [],
  deleted: {},
  disableAddContact: true,
  disableUndelete: true,
  currentPage: 1,
  recordsPerPage: 5
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    
    case types.INIT_CONTACTS:
      let contactList = [...state.contacts, ...action.contacts];

      return {
        ...state,
        contacts: [...contactList],
        currentPage: 1
      };

    case types.DELETE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(contact => (
            contact.id !== action.id
          )),
        ],
        deleted: state.contacts.filter(contact => contact.id === action.id)[0],
        disableUndelete: false,
      };

    
    case types.PREV_PAGE:
      return {
        ...state,
        currentPage: Math.max(state.currentPage - 1, 1)
      };

    default:
      return state;
  }
};

export default reducer;
