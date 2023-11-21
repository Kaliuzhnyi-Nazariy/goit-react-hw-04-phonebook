import { useEffect, useState } from 'react';

import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm.js';
import { ContactFilter } from './Filter/Filter';

const getFilteredContacts = () => {
  const savedContact = localStorage.getItem('new-contact');
  return savedContact !== null ? JSON.parse(savedContact) : [];
    // if (savedContact !== null) {
    //   return JSON.parse(savedContact)
    // }
}

export const App = () => {

  const [contacts, setContacts] = useState(getFilteredContacts)
  const [filter, setFilter] = useState('')

 
  const addContact = newContact => {

    setContacts(prevContacts => {
      if (prevContacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
        alert(`${newContact.name} is already in contacts!`);
        return prevContacts
      }
      return [...prevContacts,
      {
        ...newContact,
        id: nanoid(),
      },
      ]
    })
  }
  
  useEffect(() => {
    localStorage.setItem('new-contact', JSON.stringify(contacts))
  }, [contacts])

  
  const deleteContact = contactId => {
    setContacts(prevConatcts => prevConatcts.filter(item => item.id !== contactId))
  }

  const searchContact = contactSearch => {
    setFilter(contactSearch)
  }

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase()))

  const filteredContacts = contacts.filter(contact => {
      const hasSimilar = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase())
    return hasSimilar;
    })


  return (
      <div style={{margin: '24px'}}>
        <h1>Phonebook</h1>
        <ContactForm onClick={addContact}></ContactForm>
        <h2>Contacts</h2>
        <ContactFilter onChange={e => searchContact(e)}></ContactFilter>
        {contacts.length > 0 && (
          <ContactList
            items={filteredContacts}
            deleteContact={deleteContact}
          />
        )}
      </div>
    );
  }
