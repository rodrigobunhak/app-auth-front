import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import Login from "./components/Login";

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
      <Login />
    </AppContainer>
  );
};

export default App;
