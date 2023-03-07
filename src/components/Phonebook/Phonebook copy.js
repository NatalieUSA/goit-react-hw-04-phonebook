// import { Component } from 'react';
// import { nanoid } from 'nanoid';

// // import { contacts } from './contacts';
// import { PhonebookList } from './PhonebookList/PhonebookList';
// import { PhonebookFilter } from './PhonebookFilter/PhonebookFilter';
// import { PhonebookForm } from './PhonebookForm/PhonebookForm';
// import { Title } from 'components/shared/Title/Title';
// import { Block, Wrap } from './Phonebook.styled';

// export class Phonebook extends Component {
//   state = {
//     // contacts: [...contacts],
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('my-contacts'));
//     if (contacts?.length) {
//       this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('componentDidUpdate');
//     const { contacts } = this.state;
//     if (prevState.length !== contacts.length) {
//       console.log('Update items');
//       localStorage.setItem('my-contacts', JSON.stringify(contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     if (this.isDublicate(name)) {
//       return alert(`${name} is already in contacts`);
//     }
//     this.setState(prevState => {
//       const { contacts } = prevState;

//       const newContact = {
//         id: nanoid(),
//         name,
//         number,
//       };
//       return { contacts: [newContact, ...contacts] };
//     });
//   };

//   handleFilter = ({ target }) => {
//     this.setState({ filter: target.value });
//   };

//   removeContact = id => {
//     this.setState(({ contacts }) => {
//       const newContacts = contacts.filter(contact => contact.id !== id);
//       return { contacts: newContacts };
//     });
//   };

//   isDublicate(name) {
//     const normalizedName = name.toLowerCase();
//     const { contacts } = this.state;
//     const contact = contacts.find(({ name }) => {
//       return name.toLowerCase() === normalizedName;
//     });
//     return Boolean(contact);
//   }

//   getFilteredContacts() {
//     const { filter, contacts } = this.state;
//     if (!filter) {
//       return contacts;
//     }
//     const normalizedFilter = filter.toLowerCase();
//     const result = contacts.filter(({ name }) => {
//       return name.toLowerCase().includes(normalizedFilter);
//     });
//     return result;
//   }

//   render() {
//     console.log('Render');
//     const { addContact, handleFilter, removeContact } = this;
//     const contacts = this.getFilteredContacts();
//     const isContacts = Boolean(contacts.length);

//     return (
//       <div>
//         <Wrap>
//           <Block>
//             <PhonebookForm onSubmit={addContact} />
//           </Block>

//           <Block>
//             <PhonebookFilter handleChange={handleFilter} />

//             <PhonebookList removeContact={removeContact} contacts={contacts} />
//             {!isContacts && <Title>No contacts in list</Title>}
//           </Block>
//         </Wrap>
//       </div>
//     );
//   }
// }

// //**************************** */
// // import { Component } from 'react';
// // import { nanoid } from 'nanoid';
// // import styles from './phonebook.module.scss';

// // import { Button } from 'components/shared/Button/Button';

// // export class Phonebook extends Component {
// //   state = {
// //     contacts: [
// //       { id: nanoid(), name: 'Alex Repeta', number: '459-12-56' },
// //       { id: nanoid(), name: 'Sergii Dykyy', number: '443-89-12' },
// //       { id: nanoid(), name: 'Bill Gates', number: '645-17-79' },
// //       { id: nanoid(), name: 'Ilon Mask', number: '227-91-26' },
// //     ],
// //     filter: '',
// //     name: '',
// //     number: '',
// //   };
// //   addContact = e => {
// //     e.preventDefault();
// //     console.log(this.state);
// //     this.setState(prevState => {
// //       const { name, number, contacts } = prevState;
// //       if (this.isDublicate(name)) {
// //         return alert(`${name} is already in contacts`);
// //       }

// //       const newContact = {
// //         id: nanoid(),
// //         name,
// //         number,
// //       };
// //       return { contacts: [newContact, ...contacts], name: '', number: '' };
// //     });
// //   };

// //   handleChange = ({ target }) => {
// //     console.log(target.value);
// //     const { value, name } = target;
// //     this.setState({ [name]: value });
// //   };

// //   removeBook(id) {
// //     this.setState(({ contacts }) => {
// //       const newContacts = contacts.filter(contact => contact.id !== id);
// //       return { contacts: newContacts };
// //     });
// //   }

// //   isDublicate(name) {
// //     const normalizedName = name.toLowerCase();
// //     const { contacts } = this.state;
// //     const contact = contacts.find(({ name }) => {
// //       return name.toLowerCase() === normalizedName;
// //     });
// //     return Boolean(contact);
// //   }
// //   getFilteredContacts() {
// //     const { filter, contacts } = this.state;
// //     if (!filter) {
// //       return contacts;
// //     }
// //     const normalizedFilter = filter.toLowerCase();
// //     const result = contacts.filter(({ name }) => {
// //       return name.toLowerCase().includes(normalizedFilter);
// //     });
// //     return result;
// //   }

// //   render() {
// //     const { addContact, handleChange } = this;
// //     const { name, number } = this.state;
// //     const contacts = this.getFilteredContacts();
// //     const contact = contacts.map(({ id, name, number }) => {
// //       return (
// //         <li key={id}>
// //           {name}: {number}
// //           <Button type="submit" onClick={() => this.removeBook(id)}>
// //             delete
// //           </Button>
// //         </li>
// //       );
// //     });
// //     return (
// //       <div>
// //         <div className={styles.wrapper}>
// //           <div className={styles.block}>
// //             <form action="" onSubmit={addContact}>
// //               <div className={styles.formGroup}>
// //                 <label>Name</label>
// //                 <input
// //                   onChange={handleChange}
// //                   placeholder="enter name"
// //                   type="text"
// //                   name="name"
// //                   value={name}
// //                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// //                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// //                   required
// //                 />
// //               </div>
// //               <div className={styles.formGroup}>
// //                 <label>Number</label>
// //                 <input
// //                   onChange={handleChange}
// //                   placeholder="enter number"
// //                   type="text"
// //                   name="number"
// //                   value={number}
// //                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// //                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// //                   required
// //                 />
// //               </div>
// //               <Button type="submit">Add contact</Button>
// //             </form>
// //           </div>
// //           <div className={styles.block}>
// //             <div className={styles.formGroup}>
// //               <label>Find contacts by name</label>
// //               <input
// //                 name="filter"
// //                 onChange={handleChange}
// //                 placeholder="enter name"
// //               />
// //             </div>
// //             <ul>{contact}</ul>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // import { Component } from 'react';
// // import { nanoid } from 'nanoid';

// // import { contacts } from './contacts';
// // import { PhonebookList } from './PhonebookList/PhonebookList';
// // import { PhonebookFilter } from './PhonebookFilter/PhonebookFilter';
// // import { PhonebookForm } from './PhonebookForm/PhonebookForm';

// // import { Block, Wrap } from './Phonebook.styled';

// // export class Phonebook extends Component {
// //   state = {
// //     contacts: [...contacts],
// //     filter: '',
// //     name: '',
// //     number: '',
// //   };

// //   addContact = ({ name, number }) => {
// //     if (this.isDublicate(name)) {
// //       return alert(`${name} is already in contacts`);
// //     }
// //     this.setState(prevState => {
// //       const { contacts } = prevState;

// //       const newContact = {
// //         id: nanoid(),
// //         name,
// //         number,
// //       };
// //       return { contacts: [newContact, ...contacts] };
// //     });
// //   };

// //   handleFilter = ({ target }) => {
// //     this.setState({ filter: target.value });
// //   };

// //   removeContact = id => {
// //     this.setState(({ contacts }) => {
// //       const newContacts = contacts.filter(contact => contact.id !== id);
// //       return { contacts: newContacts };
// //     });
// //   };

// //   isDublicate(name) {
// //     const normalizedName = name.toLowerCase();
// //     const { contacts } = this.state;
// //     const contact = contacts.find(({ name }) => {
// //       return name.toLowerCase() === normalizedName;
// //     });
// //     return Boolean(contact);
// //   }

// //   getFilteredContacts() {
// //     const { filter, contacts } = this.state;
// //     if (!filter) {
// //       return contacts;
// //     }
// //     const normalizedFilter = filter.toLowerCase();
// //     const result = contacts.filter(({ name }) => {
// //       return name.toLowerCase().includes(normalizedFilter);
// //     });
// //     return result;
// //   }

// //   render() {
// //     const { addContact, handleFilter, removeContact } = this;
// //     const contacts = this.getFilteredContacts();
// //     const isContacts = Boolean(contacts.length);

// //     return (
// //       <div>
// //         <Wrap>
// //           <Block>
// //             <PhonebookForm onSubmit={addContact} />
// //           </Block>

// //           <Block>
// //             <PhonebookFilter handleChange={handleFilter} />

// //             <PhonebookList removeContact={removeContact} contacts={contacts} />
// //             {!isContacts && <p>No contacts in list</p>}
// //           </Block>
// //         </Wrap>
// //       </div>
// //     );
// //   }
// // }

// // //**************************** */
// // // import { Component } from 'react';
// // // import { nanoid } from 'nanoid';
// // // import styles from './phonebook.module.scss';

// // // import { Button } from 'components/shared/Button/Button';

// // // export class Phonebook extends Component {
// // //   state = {
// // //     contacts: [
// // //       { id: nanoid(), name: 'Alex Repeta', number: '459-12-56' },
// // //       { id: nanoid(), name: 'Sergii Dykyy', number: '443-89-12' },
// // //       { id: nanoid(), name: 'Bill Gates', number: '645-17-79' },
// // //       { id: nanoid(), name: 'Ilon Mask', number: '227-91-26' },
// // //     ],
// // //     filter: '',
// // //     name: '',
// // //     number: '',
// // //   };
// // //   addContact = e => {
// // //     e.preventDefault();
// // //     console.log(this.state);
// // //     this.setState(prevState => {
// // //       const { name, number, contacts } = prevState;
// // //       if (this.isDublicate(name)) {
// // //         return alert(`${name} is already in contacts`);
// // //       }

// // //       const newContact = {
// // //         id: nanoid(),
// // //         name,
// // //         number,
// // //       };
// // //       return { contacts: [newContact, ...contacts], name: '', number: '' };
// // //     });
// // //   };

// // //   handleChange = ({ target }) => {
// // //     console.log(target.value);
// // //     const { value, name } = target;
// // //     this.setState({ [name]: value });
// // //   };

// // //   removeBook(id) {
// // //     this.setState(({ contacts }) => {
// // //       const newContacts = contacts.filter(contact => contact.id !== id);
// // //       return { contacts: newContacts };
// // //     });
// // //   }

// // //   isDublicate(name) {
// // //     const normalizedName = name.toLowerCase();
// // //     const { contacts } = this.state;
// // //     const contact = contacts.find(({ name }) => {
// // //       return name.toLowerCase() === normalizedName;
// // //     });
// // //     return Boolean(contact);
// // //   }
// // //   getFilteredContacts() {
// // //     const { filter, contacts } = this.state;
// // //     if (!filter) {
// // //       return contacts;
// // //     }
// // //     const normalizedFilter = filter.toLowerCase();
// // //     const result = contacts.filter(({ name }) => {
// // //       return name.toLowerCase().includes(normalizedFilter);
// // //     });
// // //     return result;
// // //   }

// // //   render() {
// // //     const { addContact, handleChange } = this;
// // //     const { name, number } = this.state;
// // //     const contacts = this.getFilteredContacts();
// // //     const contact = contacts.map(({ id, name, number }) => {
// // //       return (
// // //         <li key={id}>
// // //           {name}: {number}
// // //           <Button type="submit" onClick={() => this.removeBook(id)}>
// // //             delete
// // //           </Button>
// // //         </li>
// // //       );
// // //     });
// // //     return (
// // //       <div>
// // //         <div className={styles.wrapper}>
// // //           <div className={styles.block}>
// // //             <form action="" onSubmit={addContact}>
// // //               <div className={styles.formGroup}>
// // //                 <label>Name</label>
// // //                 <input
// // //                   onChange={handleChange}
// // //                   placeholder="enter name"
// // //                   type="text"
// // //                   name="name"
// // //                   value={name}
// // //                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// // //                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className={styles.formGroup}>
// // //                 <label>Number</label>
// // //                 <input
// // //                   onChange={handleChange}
// // //                   placeholder="enter number"
// // //                   type="text"
// // //                   name="number"
// // //                   value={number}
// // //                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// // //                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// // //                   required
// // //                 />
// // //               </div>
// // //               <Button type="submit">Add contact</Button>
// // //             </form>
// // //           </div>
// // //           <div className={styles.block}>
// // //             <div className={styles.formGroup}>
// // //               <label>Find contacts by name</label>
// // //               <input
// // //                 name="filter"
// // //                 onChange={handleChange}
// // //                 placeholder="enter name"
// // //               />
// // //             </div>
// // //             <ul>{contact}</ul>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // // }
