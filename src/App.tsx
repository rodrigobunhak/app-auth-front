import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import LoginPage from "./components/LoginPage";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <LoginPage />
    </AppContainer>
  );
};

export default App;
