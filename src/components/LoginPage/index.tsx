import React from "react";
import { Button, Container, Form, FormSection, InfoSection, Input } from "./styles";

const LoginPage: React.FC = () => {
  return (
    <Container>
      <InfoSection>
        <h1>title</h1>
        <p>sub-title</p>
      </InfoSection>
      <FormSection>
        <Form>
          <h2>Login</h2>
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Senha" required />
          <Button type="submit">Logar</Button>
        </Form>
      </FormSection>
    </Container>
  );
};

export default LoginPage;
