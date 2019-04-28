/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddContact from '.';

describe('AddContact component', () => {
  let component;
  let mountedComponent;
  const submitMock = jest.fn();
  const undeleteMock = jest.fn();
  const changeMock = jest.fn();
  const fetchContactsMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddContact
        submitContact={submitMock}
        undeleteContact={undeleteMock}
        inputChanged={changeMock}
        disableAddContact
        disableUndelete
        fetchContacts={fetchContactsMock}
      />,
    );

    mountedComponent = mount(
      <AddContact
        submitContact={submitMock}
        undeleteContact={undeleteMock}
        inputChanged={changeMock}
        disableAddContact
        disableUndelete
        fetchContacts={fetchContactsMock}
      />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(component.find('.contact-input').length).toEqual(1);
  });

  describe('Add Contact button', () => {
    it('Should exist', () => {
      expect(component.find('.contact-submit').length).toEqual(1);
    });

    it('Should call the submitContact function when clicked', () => {
      expect(submitMock.mock.calls.length).toEqual(0);
      mountedComponent.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });

    it('Should be disabled when there is no text in the input', () => {
      const disabled = component.find('.contact-submit').html().includes('disabled=""');

      expect(disabled).toEqual(true);
    });

    it('Should not be disabled when there is text in the input', () => {
      component = shallow(
        <AddContact
          submitContact={submitMock}
          undeleteContact={undeleteMock}
          inputChanged={changeMock}
          disableAddContact={false}
          disableUndelete
          fetchContacts={fetchContactsMock}
        />,
      );

      const disabled = component.find('.contact-submit').html().includes('disabled=""');

      expect(disabled).toEqual(false);
    });
  });

  describe('Undelete button', () => {
    const undeleteComponent = shallow(
      <AddContact
        submitContact={submitMock}
        undeleteContact={undeleteMock}
        inputChanged={changeMock}
        disableAddContact
        disableUndelete={false}
        fetchContacts={fetchContactsMock}
      />,
    );

    it('Should exist', () => {
      expect(undeleteComponent.find('.contact-undelete').length).toEqual(1);
    });

    it('Should call the undeleteContact function when clicked', () => {
      expect(undeleteMock.mock.calls.length).toEqual(0);
      undeleteComponent.find('.contact-undelete').simulate('click');
      expect(undeleteMock.mock.calls.length).toEqual(1);
    });

    it('Should be disabled when there is no deleted Contact', () => {
      const disabled = component.find('.contact-undelete').html().includes('disabled=""');

      expect(disabled).toEqual(true);
    });

    it('Should not be disabled when there is a deleted Contact', () => {
      const disabled = undeleteComponent.find('.contact-undelete').html().includes('disabled=""');

      expect(disabled).toEqual(false);
    });
    it('Should call the fetchContacts function when fetch contacts button is clicked', () => {
      expect(fetchContactsMock.mock.calls.length).toEqual(0);
      component.find('.fetch-submit').at(0).simulate('click');
      expect(fetchContactsMock.mock.calls.length).toEqual(1);
    });
  });
});
