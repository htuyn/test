const TOKEN_KEY = 'qa_token';
const USER_KEY = 'qa_user';

export const storage = {
  getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  },

  setToken(token: string) {
    window.localStorage.setItem(TOKEN_KEY, token);
  },

  clearToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  },

  getUser<T = Record<string, any>>(): T | null {
    const json = window.localStorage.getItem(USER_KEY);
    if (!json) return null;
    try {
      return JSON.parse(json) as T;
    } catch {
      return null;
    }
  },

  setUser(user: unknown) {
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  clearUser() {
    window.localStorage.removeItem(USER_KEY);
  },

  clearAll() {
    this.clearToken();
    this.clearUser();
  },
};
