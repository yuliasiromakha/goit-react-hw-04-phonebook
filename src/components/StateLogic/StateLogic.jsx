import React, { useState } from "react";
import PhonebookTitle from "../PhonebookTitle/PhonebookTitle";
import { nanoid } from 'nanoid';
import AddContactButton from "components/AddContactButton/AddContactButton";

const StateLogic = ({ onAddContact }) => {
  const [state, setState] = useState({
    contacts: [],
    filter: '',
    name: '',
    number: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const { name, number } = state;
  
    const contact = {
      id: nanoid(),
      name,
      number,
    };
  
    onAddContact(contact);
    setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, contact],
      name: '',
      number: ''
    }));
  };

//   const handleFilterChange = (event) => {
//     const { value } = event.target;
//     setState(prevState => ({
//       ...prevState,
//       filter: value
//     }));
//   };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleInputChange}
        />

        <PhonebookTitle
          title='Number'
          styles={{
            fontSize: 15,
            marginBottom: 0,
          }}
        />

        <input
          type="tel"
          name="number"
          value={state.number}
          onChange={handleInputChange}
        />

        <AddContactButton styles={{marginLeft: 30}}/>
      </form>
    </div>
  );
};

export default StateLogic;
