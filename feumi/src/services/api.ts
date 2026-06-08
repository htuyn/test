import axios from 'axios';
import { storage } from './storage';

// Use relative `/api` so dev proxy handles routing to backend.
const clientBase = process.env.API_BASE_URL || process.env.VITE_API_BASE_URL || '/api';

export const api = axios.create({
  baseURL: clientBase,
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const token = storage.getToken();
  
  if (token && config.headers) {
    // Sử dụng hàm .set() của AxiosHeaders
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  
  return config;
});