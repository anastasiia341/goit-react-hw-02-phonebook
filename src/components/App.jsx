import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './contacts/ContactList';
import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';
import css from './app.module.css';

class App extends Component {
  state = {
    filter: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHemdler = ({ name, number }) => {
    const newContact = { id: nanoid(), name: name, number: number };

    this.state.contacts.find(contact => contact.name === name)
      ? window.alert(`${name} is alredy in contacts.`)
      : this.setState(prevState => {
          return { contacts: [...prevState.contacts, newContact] };
        });
  };

  handlerChangeFilter = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value.toLowerCase() });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    const filterContacts = this.filterContacts();

    return (
      <div className={css.container}>
        <h1 className={css.phohebookTitle}>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHemdler} />
        <h2 className={css.phohebookTitle}>Contacts</h2>
        <Filter onChange={this.handlerChangeFilter} />
        <ContactList contacts={filterContacts} onClick={this.deleteContact} />
      </div>
    );
  }
}

export { App };
