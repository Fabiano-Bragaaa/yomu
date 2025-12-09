import { type User } from '@domain';

export interface AuthCredentialsType {
  userCredentials: User | null;
  saveCredentials: (user: User) => Promise<void>;
  removeCredentials: () => Promise<void>;
  refreshToken: () => Promise<void>;
  isLoading: boolean;
}
