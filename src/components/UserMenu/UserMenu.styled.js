import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary}; 
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}; 
  }
`;
