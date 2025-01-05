import { styled } from "styled-components";

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -8px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;