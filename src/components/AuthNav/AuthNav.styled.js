import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-left: auto;
`;

export const Link = styled(NavLink)`
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  transition: background 0.3s;

  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.buttonText};
  }
`;
