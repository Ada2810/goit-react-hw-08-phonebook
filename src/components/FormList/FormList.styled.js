import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  width: 400px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  outline: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.inputFocus};
    box-shadow: ${({ theme }) => theme.boxShadow.default};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonText};
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: ${({ theme }) => theme.boxShadow.default};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const Span = styled.span`
  display: flex;
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
