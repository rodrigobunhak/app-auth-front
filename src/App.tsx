import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
import { Header } from "./components/Header";
import { UsersList } from "./components/UserList";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/users" element={<UsersList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
