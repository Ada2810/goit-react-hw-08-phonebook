import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px 30px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: baseline;
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text || "#333"};
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary || "#6c757d"};
    color: ${({ theme }) => theme.colors.buttonText || "#fff"};
  }

  &.active {
    background: ${({ theme }) => theme.colors.secondary || "#5a6268"};
    color: ${({ theme }) => theme.colors.buttonText || "#fff"};
  }
`;
