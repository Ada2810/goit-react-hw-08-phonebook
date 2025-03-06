import styled from '@emotion/styled';

export const Form = styled.form``;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.cardBackground};
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const ContainerBox = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 5px;
  outline: none;
  background: ${({ theme }) => theme.colors.cardBackground};
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.inputFocus};
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Span = styled.span``;
