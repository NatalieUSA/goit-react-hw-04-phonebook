import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { PhonebookList } from './PhonebookList/PhonebookList';
import { PhonebookFilter } from './PhonebookFilter/PhonebookFilter';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Title } from 'components/shared/Title/Title';
import { Block, Wrap } from './Phonebook.styled';

export const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    return contacts ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    console.log(name);
    if (isDublicate(name)) {
      alert(`${name} is already in contacts`);
      return false;
    }

    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      console.log(newContact);
      return [newContact, ...prevContacts];
    });
    return true;
  };

  const isDublicate = name => {
    console.log(name);

    console.log(contacts);
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });
    console.log(result);
    return Boolean(result);
  };

  const handleFilter = ({ target }) => setFilter(target.value);

  const getFilteredContacts = () => {
    if (!filter) {
      console.log(contacts);
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    console.log(normalizedFilter);
    const result = contacts.filter(({ name }) => {
      console.log(name);
      console.log(name.toLowerCase().includes(normalizedFilter));
      return name.toLowerCase().includes(normalizedFilter);
    });
    console.log(result);
    return result;
  };

  const removeContact = id => {
    console.log(id);
    setContacts(prevContacts => {
      console.log(prevContacts);
      // prevContacts.filter(contact => contact.id !== id);
      prevContacts.filter(contact => console.log(contact.id));
    });
  };

  const filteredContacts = getFilteredContacts();
  console.log(filteredContacts.length);
  const isContacts = Boolean(filteredContacts.length);
  console.log(isContacts);

  return (
    <div>
      <Wrap>
        <Block>
          <PhonebookForm onSubmit={addContact} />
        </Block>

        <Block>
          <PhonebookFilter handleChange={handleFilter} />

          {isContacts && (
            <PhonebookList
              removeContact={removeContact}
              contacts={filteredContacts}
            />
          )}

          {!isContacts && <Title>No contacts in list</Title>}
        </Block>
      </Wrap>
    </div>
  );
};
