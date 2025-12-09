export interface User {
  access_token: string;
  refresh_token: string;
}

export type RefreshTokenResponse = Omit<User, 'refresh_token'>;
