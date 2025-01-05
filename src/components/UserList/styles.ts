import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const FilterContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #666;
  }
`;

export const UserList = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  background-color: #f9f9f9;
  border-bottom: 2px solid #eee;
  font-weight: 600;
  color: #333;
`;

export const HeaderItem = styled.div`
  &:last-child {
    text-align: right;
  }
`;

export const UserItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const UserData = styled.div`
  &:last-child {
    text-align: right;
  }
`;

export const PaginationContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.active ? '#333' : '#eee'};
  background-color: ${props => props.active ? '#333' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${props => props.active ? '#444' : '#f5f5f5'};
  }
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  padding: 1rem;
  text-align: center;
  background-color: #fdf0ef;
  border-radius: 4px;
`;