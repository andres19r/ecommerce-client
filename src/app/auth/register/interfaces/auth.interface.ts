export interface AuthResponse {
  ok: boolean;
  user: User;
  token: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  emailValidated: boolean;
  role: string[];
  city: string;
}

export interface RegisterBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city?: string;
}
