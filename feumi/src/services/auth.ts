import type { AuthUser, Role } from '../models/auth';
import { api } from './api';
import { storage } from './storage';

export type LoginPayload = { email: string; password: string };
export type RegisterPayload = { email: string; password: string; fullName: string; role: Exclude<Role, 'ADMIN'> };

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

export const authService = {
  async login(payload: LoginPayload) {
    const { data } = await api.post<AuthResponse>('/auth/login', payload);
    storage.setToken(data.token);
    storage.setUser(data.user);
    return data;
  },

  async register(payload: RegisterPayload) {
    const { data } = await api.post<AuthResponse>('/auth/register', payload);
    storage.setToken(data.token);
    storage.setUser(data.user);
    return data;
  },

  async me() {
    const { data } = await api.get<AuthUser>('/auth/me');
    storage.setUser(data);
    return data;
  },

  getToken() {
    return storage.getToken();
  },

  getUser() {
    return storage.getUser<AuthUser>();
  },

  clearSession() {
    storage.clearAll();
  },
};
