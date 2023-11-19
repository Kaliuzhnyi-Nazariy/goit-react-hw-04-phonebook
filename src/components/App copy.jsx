import { Component } from 'react';

import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm.js';
import { ContactFilter } from './Filter/Filter';


export class App extends Component {
  state = {
     contacts: [],
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    filter: '',
  };

  componentDidMount() {
    const savedContact = localStorage.getItem('new-contact');

    if (savedContact !== null) {
      this.setState({
        contacts: JSON.parse(savedContact)
      })
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('new-contact',
      JSON.stringify(this.state.contacts))
    }
  }

  addContact = newContact => {
    this.setState(prevState => {
      const comparedName = this.state.contacts.map(item => {
        const nameComparing = item.name
          .toLowerCase();
        return nameComparing;
      });
      if (comparedName.find(name => name === newContact.name.toLocaleLowerCase())) {
        console.log(comparedName.map(name => name === newContact.name.toLocaleLowerCase()))
        return alert(`${newContact.name} is already in contacts!`);
      }
       return {
        contacts: [
          ...prevState.contacts,
          {
            ...newContact,
            id: nanoid(),
          },
        ],
      };
    });
    };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  contactFilter = contactSearch => {
    this.setState({
      filter: contactSearch,
    });
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(item => {
      const nameCont = item.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase());
      return nameCont;
    });
    return (
      <div style={{margin: '24px'}}>
        <h1>Phonebook</h1>
        <ContactForm onClick={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <ContactFilter onChange={e => this.contactFilter(e)}></ContactFilter>
        {contacts.length > 0 && (
          <ContactList
            items={filteredContacts}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}