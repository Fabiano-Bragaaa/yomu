export interface User {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export type RefreshTokenResponse = Omit<User, 'refresh_token'>;
