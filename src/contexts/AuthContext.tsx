import { createContext, useContext, useState, ReactNode } from 'react';
import { authService } from '../services/Api';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    // Check if we have user data in localStorage
    const storedUser = localStorage.getItem('@App:user');
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  });

  const isAuthenticated = !!user;

  async function signIn(email: string, password: string) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await authService.signIn(email, password);
      const userData = {
        name: response.data.user.name,
        email: response.data.user.email
      };
      
      // Save user data in localStorage
      localStorage.setItem('@App:user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      throw error;
    }
  }

  async function signUp(name: string, email: string, password: string) {
    // eslint-disable-next-line no-useless-catch
    try {
      await authService.signUp(name, email, password);
    } catch (error) {
      throw error;
    }
  }

  function logout() {
    localStorage.removeItem('@App:user');
    localStorage.removeItem('token');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}