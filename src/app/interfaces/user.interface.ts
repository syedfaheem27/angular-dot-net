export interface User {
  username: string;
  password: string;
  role?: string;
  isLoggedIn?: boolean;
  timeStamp?: number;
}

export interface UserSession {
  username: string;
  role: string;
  timeStamp: number;
}

export interface BackendUser extends User {
  id: string;
}
