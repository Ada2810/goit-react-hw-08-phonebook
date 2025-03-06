import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import {
  Container,
  ContainerBox,
  Form,
  Input,
  Button,
  Title,
  Span,
  ErrorMessage,
} from '../LoginForm/LoginForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;

    try {
      const response = await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();

      if (!response || response.error) {
        throw new Error(response?.error?.message || 'Registration failed');
      }
    } catch (err) {
      setError(err.message);
    }

    form.reset();
  };

  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ContainerBox>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </ContainerBox>
        <ContainerBox>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            title="Please enter a valid email address."
            required
          />
        </ContainerBox>
        <ContainerBox>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            title="The password must contain only Latin letters, numbers, and special characters."
            required
          />
        </ContainerBox>

        <Button type="submit">
          <Span></Span>
          <Span></Span>
          <Span></Span>
          <Span></Span>
          Register
        </Button>
      </Form>
    </Container>
  );
};
