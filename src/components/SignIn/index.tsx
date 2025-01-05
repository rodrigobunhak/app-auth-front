import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Button, Container, ErrorMessage, Form, FormSection, InfoSection, Input } from "./styles";

type SignInCredentials = {
  email: string;
  password: string;
}

type ApiError = {
  message: string;
  status?: number;
}

export function SignIn(): JSX.Element {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [credentials, setCredentials] = useState<SignInCredentials>({
    email: '',
    password: '',
  });


  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await signIn(credentials.email, credentials.password);
      navigate('/users');
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
    }
  };

  return (
    <Container>
      <InfoSection>
        <h1>title</h1>
        <p>sub-title</p>
      </InfoSection>
      <FormSection>
        <Form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Logar</Button>
          <Button type="button" onClick={() => navigate('/signup')}>Cadastrar</Button>
        </Form>
      </FormSection>
    </Container>
  );
}