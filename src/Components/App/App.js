import React, { Component } from "react";
import { nanoid } from "nanoid";

import { Container } from "../App/App.styled";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

import filterContacts from "./../../utils/contactFilter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentMount() {
    const contactsInLocal = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contactsInLocal);

    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = (contact) => {
    const inputId = nanoid();

    if (this.state.contacts.some((el) => el.name === contact.name)) {
      alert(`${contact.name} already in contacts`);
      return;
    }

    this.setState((prev) => ({
      contacts: [...prev.contacts, { ...contact, id: inputId }],
    }));
  };

  handleDeleteContact = (event) => {
    this.setState({
      contacts: this.state.contacts.filter(
        (contact) => contact.id !== event.target.id
      ),
    });
  };

  handleFilterContact = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const contacts = filterContacts(this.state.contacts, this.state.filter);

    return (
      <Container>
        <h2>PhoneBook</h2>
        <ContactForm handleAddContact={this.handleAddContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          onFilter={this.handleFilterContact}
        />

        <ContactList
          contacts={contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
