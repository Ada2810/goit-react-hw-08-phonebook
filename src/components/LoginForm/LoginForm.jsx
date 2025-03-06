import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import {
  Container,
  ContainerBox,
  Form,
  Input,
  Button,
  Title,
  Span,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;

    try {
      await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    }

    form.reset();
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <ContainerBox>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </ContainerBox>
        <ContainerBox>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </ContainerBox>

        <Button type="submit">
          <Span></Span>
          <Span></Span>
          <Span></Span>
          <Span></Span>
          Login
        </Button>
      </Form>
    </Container>
  );
};
