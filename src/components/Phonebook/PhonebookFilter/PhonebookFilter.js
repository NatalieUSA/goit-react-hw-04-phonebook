import PropTypes from 'prop-types';

import { FormGroup, Label, Input } from './PhonebookFilter.styled';

export const PhonebookFilter = ({ handleChange }) => {
  return (
    <FormGroup>
      <Label>Find contacts by name</Label>
      <Input name="filter" onChange={handleChange} placeholder="enter name" />
    </FormGroup>
  );
};

PhonebookFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
