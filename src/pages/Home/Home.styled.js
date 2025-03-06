import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export const Link = styled(RouterLink)`
  display: inline-block;
  padding: 12px 24px;
  background: #b5e7a0; /* Verde pastel */
  color: black; /* Text negru */
  border-radius: 8px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid #9ccc98; /* O nuanță ușor mai închisă */
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: #a2cf90; /* Verde pastel mai închis */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;
