import React from 'react';
import PropTypes from 'prop-types';

const paginate = (array, page_size, page_number) => {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

const ContactList = ({ contacts, deleteContact, recordsPerPage, currentPage, nextPage, prevPage }) => {
  contacts = paginate(contacts, recordsPerPage, currentPage);
  contacts = contacts.sort((a, b) => {
    return a.id < b.id ? -1 : 1
  })

  return (
    <div>
      <table className="table table-striped col-lg-12">
        
      </table>
      <div className="float-right">
       
      </div>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteContact: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  recordsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default ContactList;
