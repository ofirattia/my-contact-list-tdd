/* global expect, it, describe */

import actions from '.';
import types from '../constants/';

describe('Actions', () => {
  const contactText = 'A contact';
  let returnedAction = actions.submitContact(contactText);

  it('Should create an action to add a contact', () => {
    const expectedAction = {
      type: types.SUBMIT_CONTACT,
      text: contactText,
    };
    expect(returnedAction.text).toEqual(expectedAction.text);
  });

  it('Should create an action to delete a contact', () => {
    const expectedAction = {
      type: types.DELETE_CONTACT,
      id: returnedAction.id,
    };

    expect(actions.deleteContact(returnedAction.id)).toEqual(expectedAction);
  });

  it('Should create an action to undelete a contact', () => {
    const expectedAction = {
      type: types.UNDELETE_CONTACT,
    };

    expect(actions.undeleteContact()).toEqual(expectedAction);
  });

  it('Should create an action to register an input change', () => {
    const expectedAction = {
      type: types.INPUT_CHANGED,
      inputText: contactText,
    };

    expect(actions.inputChanged(contactText)).toEqual(expectedAction);
  });

  
});
