import React, { Component } from "react";
import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import FilterContact from "./FilterContact/FilterContact";

import './general.css'

export class App extends Component {

  state = {
      contacts: [],
      filter: "",
    };

  addContact = (contact) => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some(
      (existingContact) => existingContact.name === contact.name
    );
    if (isDuplicate) {
      alert("Contact already exists!");
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.contacts !== prevState.contacts ) {
      console.log('contacts were updated');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;

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
          <ContactForm onAddContact={this.addContact} />
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
          onFilterChange={this.handleFilterChange}
        />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
