import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';
import { UserAddOutlined } from '@ant-design/icons';
import { Form, Label, Input, Button, Span } from './FormList.styled';
import { notifyOptions } from '../notifyOptions/notifyOptions';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

const FormList = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const normalizedName = name.toLowerCase();
    const isAdded = contacts.find(
      el => el.name.toLowerCase() === normalizedName
    );

    if (isAdded) {
      toast.error(`${name}: is already in contacts`, notifyOptions);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          placeholder="Enter name here"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          type="tel"
          placeholder="Enter number here"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">
        Add to contacts
        <UserAddOutlined />
      </Button>
    </Form>
  );
};

export default FormList;