import React from 'react';
import PropTypes from 'prop-types';

const AddContact = ({ submitContact, undeleteContact, inputChanged, disableAddContact, disableUndelete, fetchContacts }) => {
  let input;
  // const disableAddContact = true;
  // const disableUndelete = true;

  return (
    <div>

      <form className="form-inline"
        onSubmit={(event) => {
          event.preventDefault();
          
        }}
      >
        <div className="form-group mb-2">
          <label htmlFor="contactInput" className="sr-only">Contact</label>
          <input type="text" ref={(element) => {
            input = element;
          }}
            onChange={() => inputChanged(input.value)}
            className="contact-input form-control-plaintext"
            id="contactInput"
            placeholder="Contact name.." />
        </div>

        <div className="form-group mx-sm-3 mb-2">
          <button
            className="form-control contact-undelete btn-danger"
            onClick={() => undeleteContact()}
            disabled={disableUndelete}
          >
            Undelete
        </button>
        </div>

        <div className="form-group mx-sm-3 mb-2">
          <button type="button" onClick={() => {}} className="fetch-submit btn btn-success form-control">FETCH CONTACTS</button>
        </div>
      </form>
    </div>
  );
};

AddContact.propTypes = {
  submitContact: PropTypes.func.isRequired,
  undeleteContact: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  fetchContacts: PropTypes.func.isRequired,
  disableAddContact: PropTypes.bool.isRequired,
  disableUndelete: PropTypes.bool.isRequired,
};

export default AddContact;
