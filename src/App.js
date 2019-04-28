import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddContact from './components/addContact/';
import ContactList from './components/contactList';
import actions from './actions/';
import './App.css';

export const App = ({
  submitContact,
  contacts,
  deleteContact,
  undeleteContact,
  inputChanged,
  disableAddContact,
  disableUndelete,
  fetchContacts,
  recordsPerPage,
  currentPage,
  nextPage,
  prevPage
}) => (
    <div className="container">
      <h1 className="text-center">Contact list</h1>

      <AddContact
        submitContact={submitContact}
        undeleteContact={undeleteContact}
        inputChanged={inputChanged}
        disableAddContact={disableAddContact}
        disableUndelete={disableUndelete}
      />

      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        currentPage={currentPage}
        recordsPerPage={recordsPerPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );

App.propTypes = {
  submitContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteContact: PropTypes.func.isRequired,
  undeleteContact: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  disableAddContact: PropTypes.bool.isRequired,
  disableUndelete: PropTypes.bool.isRequired,
  fetchContacts: PropTypes.func.isRequired,
  recordsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired

};

const mapStateToProps = state => state.contactListApp;

const mapDispatchToProps = dispatch => ({
  submitContact: (text) => {
    if (text) {
      dispatch(actions.submitContact(text));
    }
  },

  prevPage: () => {
    dispatch(actions.prevPage());
  },

  undeleteContact: () => {
    dispatch(actions.undeleteContact());
  },

  inputChanged: (text) => {
    dispatch(actions.inputChanged(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
