import { useAuth } from "../../contexts/AuthContext";
import { HeaderWrapper, LogoutButton, Title, UserInfo, UserName } from "./styles";

export function Header(): JSX.Element {
  const { user, logout, isAuthenticated } = useAuth();
  
  return (
    <HeaderWrapper>
      <Title>Auth App</Title>
      {isAuthenticated && (
        <UserInfo>
          <UserName>
            Logged in as: <strong>{user?.name}</strong>
          </UserName>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        </UserInfo>
      )}
    </HeaderWrapper>
  );
}