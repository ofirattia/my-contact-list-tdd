/* global it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers/';

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
    <App
      state={initialState}
      submitContact={mockFunction}
      contacts={[]}
      deleteContact={mockFunction}
      undeleteContact={mockFunction}
      inputChanged={mockFunction}
      disableAddContact
      disableUndelete
      fetchContacts={mockFunction}
      nextPage={mockFunction}
      prevPage={mockFunction}
      currentPage={1}
      recordsPerPage={5}
    />,
  );

  expect(component.exists()).toEqual(true);
});
