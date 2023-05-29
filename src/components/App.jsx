import React, { useState } from "react";
import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
import StateLogic from "./StateLogic/StateLogic";
import ContactList from "./ContactList/ContactList";
import FilterContact from "./FilterContact/FilterContact";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (contact) => {
    const isDuplicate = contacts.some(
      (existingContact) =>
        existingContact.name === contact.name && existingContact.number === contact.number
    );
    if (isDuplicate) {
      alert("Contact already exists!");
    } else {
      setContacts((prevContacts) => [...prevContacts, contact]);
    }
  };
  

  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div style={{
        border: '1px solid black',
        padding: '15px 30px',
        width: 350,
      }}>
        <PhonebookTitle
          title='Name'
          styles={{
            fontSize: 15,
            marginBottom: 0,
          }}
        />
        <StateLogic onAddContact={addContact} />
      </div>

      <PhonebookTitle
        title='Contacts'
        styles={{
          fontSize: 25,
          marginBottom: 0,
        }}
      />

      <FilterContact filter={filter} onFilterChange={setFilter} />

      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
