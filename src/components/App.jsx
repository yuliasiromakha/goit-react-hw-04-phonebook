import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import FilterContact from "./FilterContact/FilterContact";

// import { addContact, deleteContact } from "redux/actions";

import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import './general.css'

const App = () => {
  
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch()

  const addContact = (contact) => {
    const isDuplicate = contacts.some(
      (existingContact) => existingContact.name === contact.name
    );
    if (isDuplicate) {
      return alert("Contact already exists!");
    } 
    
    // setContacts((prevContacts) => [...prevContacts, contact]);
    dispatch(addContact())
    
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
    // console.log('contacts were updated');
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

// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addContact, deleteContact, setFilter } from 'redux/contactSlice';
// import { persistor } from "redux/store";
// import { PersistGate } from "redux-persist/integration/react";

// import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import FilterContact from "./FilterContact/FilterContact";

// import "./general.css";

// const App = () => {
//   const contacts = useSelector((state) => state.contact.contacts);
//   const filter = useSelector((state) => state.contact.filter);
//   const dispatch = useDispatch();

//   const addNewContact = (contact) => {
//     const isDuplicate = contacts.some(
//       (existingContact) => existingContact.name === contact.name
//     );
//     if (isDuplicate) {
//       return alert("Contact already exists!");
//     }

//     dispatch(addContact(contact));
//   };

//   const deleteExistingContact = (id) => {
//     dispatch(deleteContact(id));
//   };

//   const handleFilterChange = (filterValue) => {
//     dispatch(setFilter(filterValue));
//   };

//   useEffect(() => {
//     persistor.persist();
//   }, []);

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter)
//   );

//   return (
//     <PersistGate loading={null} persistor={persistor}>
//       <div className="general__positioning">
//         <div className="border__style">
//           <PhonebookTitle
//             title="Name"
//             styles={{
//               fontSize: 15,
//               marginBottom: 0,
//             }}
//           />
//           <ContactForm onAddContact={addNewContact} />
//         </div>

//         <PhonebookTitle
//           title="Contacts"
//           styles={{
//             fontSize: 25,
//             marginBottom: 0,
//           }}
//         />

//         <FilterContact filter={filter} onFilterChange={handleFilterChange} />

//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={deleteExistingContact}
//         />
//       </div>
//     </PersistGate>
//   );
// };

// export default App;

