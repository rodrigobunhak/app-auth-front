import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
`;

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -8px;
`;