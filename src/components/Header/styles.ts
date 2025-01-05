import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  margin-right: 10px;
  font-size: 16px;
`;

export const LogoutButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;