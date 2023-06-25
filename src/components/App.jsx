import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import FilterContact from "./FilterContact/FilterContact";

import { useEffect, useState } from "react";
import './general.css'

const App = () => {
  
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (contact) => {
    const isDuplicate = contacts.some(
      (existingContact) => existingContact.name === contact.name
    );
    if (isDuplicate) {
      return alert("Contact already exists!");
    } 
    
    setContacts((prevContacts) => [...prevContacts, contact]);
    
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue.toLowerCase());
  };
  

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);


    if (parsedContacts) {
      setContacts(parsedContacts)
    }
  }, []);

  useEffect(() => {
    console.log('contacts were updated');
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );


  return (
    <div className="general__positioning">

      <div className="border__style">
        
        <PhonebookTitle
          title="Name"
          styles={{
            fontSize: 15,
            marginBottom: 0,
          }}
        />
        <ContactForm onAddContact={addContact} />
      </div>

      <PhonebookTitle
        title="Contacts"
        styles={{
          fontSize: 25,
          marginBottom: 0,
        }}
      />

      <FilterContact
        filter={filter}
        onFilterChange={handleFilterChange}
      />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;