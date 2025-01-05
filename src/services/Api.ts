import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Replace with your actual API URL

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth services
export const authService = {
  async signIn(email: string, password: string) {
    try {
      const response = await api.post('/signin', { email, password });
      if (response.data.data.token) {
        localStorage.setItem('token', response.data.data.token);
      }
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.data || error.message;
      }
    }
  },

  async signUp(name: string, email: string, password: string) {
    try {
      const response = await api.post('/signup', { name, email, password });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.data || error.message;
      }
    }
  },

  logout() {
    localStorage.removeItem('token');
  }
};

// User services
export const userService = {
  async getUsers(page: number, limit: number, filters: unknown) {
    try {
      const response = await api.get('/users', { params: { page, limit, filters } });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.data || error.message;
      }
    }
  }
};