export interface User {
  username: string;
  password: string;
  role?: string;
  isLoggedIn?: boolean;
}

export interface UserSession {
  username: string;
  role: string;
}

export interface BackendUser extends User {
  id: string;
}
