import { useState } from "react";
import PropTypes from "prop-types";
import PhonebookTitle from "../PhonebookTitle/PhonebookTitle";
import { nanoid } from "nanoid";
import AddContactButton from "components/AddContactButton/AddContactButton";

const ContactForm = ({ onAddContact }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    onAddContact(contact)
    setName('');
    setNumber('');

  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />

        <PhonebookTitle
          title="Number"
          styles={{
            fontSize: 15,
            marginBottom: 0,
          }}
        />

        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
        />

        <AddContactButton styles={{ marginLeft: 30 }} />
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;