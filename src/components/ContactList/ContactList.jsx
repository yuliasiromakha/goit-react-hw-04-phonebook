import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDeleteClick = (id) => {
    onDeleteContact(id);
  };

  return (
    <ul style={{display: "flex", flexDirection: "column", gap: 10, justifyContent: "space-between"}}>
      {contacts.map(contact => (
        <li key={contact.id} style={{fontSize: 16 }}>
          {contact.name}: {contact.number}
          <button style={{marginLeft: 30}} onClick={() => handleDeleteClick(contact.id)}>Delete Contact</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;
