/* global expect, it, describe */

import types from '../constants/';
import { reducer, initialState } from '.';
import actions from '../actions';

describe('Reducer', () => {
  const contactText = 'A contact';
  let returnedAction = actions.submitContact(contactText);

  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit contact', () => {
    it('Should return the correct state', () => {


      const expectedState = {
        contacts: [
          {
            id: returnedAction.id,
            text: contactText,
          },
        ],
        currentPage: 1,
        deleted: {},
        disableAddContact: true,
        disableUndelete: true,
        recordsPerPage: 5
      };

      expect(reducer(undefined, returnedAction)).toEqual(expectedState);
    });
  });

  describe('Delete contact', () => {
    it('Should return the correct state', () => {
      const startingState = {
        contacts: [
          {
            id: returnedAction.id,
            text: contactText,
          },
        ],
        deleted: {},
        disableUndelete: true,
      };

      const action = {
        type: types.DELETE_CONTACT,
        id: returnedAction.id,
      };

      const expectedState = {
        contacts: [],
        deleted: {
          id: returnedAction.id,
          text: contactText,
        },
        disableUndelete: false
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Undelete contact', () => {
    it('Should return the correct state', () => {
      const startingState = {
        contacts: [],
        deleted: {
          id: returnedAction.id,
          text: contactText,
        },
        disableUndelete: false
      };

      const action = {
        type: types.UNDELETE_CONTACT,
      };

      const expectedState = {
        contacts: [
          {
            id: returnedAction.id,
            text: contactText,
          },
        ],
        deleted: {},
        disableUndelete: true
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
  describe('Pagination', () => {

    it('Should return the correct state after invoke NEXT_PAGE action', () => {
      const startingState = {
        contacts: [
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defdx",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defda",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defe9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defr9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625deft9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defy9",
            text: 'A Contact',
          }
        ],
        currentPage: 1,
        deleted: {},
        disableUndelete: false,
        recordsPerPage: 5
      };

      const action = {
        type: types.NEXT_PAGE,
      };

      const expectedState = {
        contacts: [
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defdx",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defda",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defe9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defr9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625deft9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defy9",
            text: 'A Contact',
          }
        ],
        currentPage: 2,
        deleted: {},
        disableUndelete: false,
        recordsPerPage: 5
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
    it('Should return the correct state after invoke PREV_PAGE action', () => {
      const startingState = {
        contacts: [
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defdx",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defda",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defe9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defr9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625deft9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defy9",
            text: 'A Contact',
          }
        ],
        currentPage: 2,
        deleted: {},
        disableUndelete: false,
        recordsPerPage: 5
      };

      const action = {
        type: types.PREV_PAGE,
      };

      const expectedState = {
        contacts: [
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defdx",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defda",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defe9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defr9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625deft9",
            text: 'A Contact',
          },
          {
            id: "c24ab2b1-d2bf-4869-94bb-7f59625defy9",
            text: 'A Contact',
          }
        ],
        currentPage: 1,
        deleted: {},
        disableUndelete: false,
        recordsPerPage: 5
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
  describe('Input change', () => {
    it('Should return the correct state when no value entered', () => {
      const startingState = {
        contacts: [],
        currentPage: 1,
        deleted: {},
        disableAddContact: true,
        recordsPerPage: 5
      };

      const action = {
        type: types.INPUT_CHANGED,
        inputText: '',
      };

      const expectedState = {
        contacts: [],
        currentPage: 1,
        deleted: {},
        disableAddContact: true,
        recordsPerPage: 5
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });

    it('Should return the correct state when a value is entered', () => {
      const startingState = {
        contacts: [],
        deleted: {},
        disableAddContact: true,
        currentPage: 1,
        recordsPerPage: 5
      };

      const action = {
        type: types.INPUT_CHANGED,
        inputText: contactText,
      };

      const expectedState = {
        contacts: [],
        deleted: {},
        disableAddContact: false,
        currentPage: 1,
        recordsPerPage: 5
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
