/* global describe, it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import ContactList from '.';

describe('ContactList component', () => {
  const nextFunctionMock = jest.fn();
  const deleteFunction = jest.fn();
  const prevFunctionMock = jest.fn();

  const props = {
    contacts: [
      {
        id: "c24ab2b1-d2bf-4869-94bb-7f59625defd9",
        text: 'A Contact',
      },
    ],
    deleteContact: deleteFunction,
    currentPage: 1,
    recordsPerPage: 5,
    nextPage: nextFunctionMock,
    prevPage: prevFunctionMock
  };

  const component = shallow(<ContactList {...props} />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should display a Contact when passed in as a prop', () => {
    expect(component.find('.contact-text').text()).toEqual(props.contacts[0].text);
  });

  it('Should call the deleteContact function when Delete button is clicked', () => {
    expect(deleteFunction.mock.calls.length).toEqual(0);
    component.find('.contact-delete').at(0).simulate('click');
    expect(deleteFunction.mock.calls.length).toEqual(1);
  });
  
});
