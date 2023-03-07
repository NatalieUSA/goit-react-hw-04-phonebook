import { useState } from 'react';
import PropTypes from 'prop-types';

// import { Button } from 'components/shared/Button/Button';

import { initialState } from './initialState';
import { FormGroup, Input, Label } from './PhonebookForm.styled';
import { Btn } from 'components/shared/Button/Button.styled';

export const PhonebookForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    // console.log(target.value);
    const { value, name } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setState({ ...initialState });
  };

  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          onChange={handleChange}
          placeholder="enter name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Number</Label>
        <Input
          onChange={handleChange}
          placeholder="enter number"
          type="text"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormGroup>
      <Btn type="submit">Add contact</Btn>
      {/* <Button type="submit">Add contact</Button> */}
    </form>
  );
};

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};