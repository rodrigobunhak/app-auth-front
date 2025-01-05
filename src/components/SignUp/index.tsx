import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/Api";
import { Button, ErrorMessage, Form, Input, InputWrapper } from "./styles";

type SignUpData = {
  name: string;
  email: string;
  password: string;
}

type ApiError = {
  message: string;
  status?: number;
}

export function SignUp(): JSX.Element {
  const [formData, setFormData] = useState<SignUpData>({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await authService.signUp(formData.name, formData.email, formData.password);
      navigate('/signin');
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button type="submit">Sign Up</Button>
      <Button type="button" onClick={() => navigate('/signin')}>Voltar</Button>
    </Form>
  );
}