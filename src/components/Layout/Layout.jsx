import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import styled from '@emotion/styled';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  text-align: center;
`;

export const Layout = () => {
  return (
    <MainContainer>
      <AppBar />
      <Suspense fallback={null}>
        <Content>
          <Outlet />
        </Content>
      </Suspense>
    </MainContainer>
  );
};
