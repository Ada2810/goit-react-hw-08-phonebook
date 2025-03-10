import styled from '@emotion/styled';

export const ListWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  padding: ${(p) => p.theme.spacing.md}; 
  overflow-y: auto;
  max-height: 400px;
width: 15%;
`;

export const List = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px; 
  font-size: ${(p) => p.theme.fonts.main}; 
  color: ${(p) => p.theme.colors.text}; 
`;
