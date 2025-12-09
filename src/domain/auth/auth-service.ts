import { authApi } from './auth-api';
import { type RefreshTokenResponse, type User } from './auth-type';

async function login(): Promise<User> {
  const response = await authApi.login();

  return response;
}

async function refreshToken(
  refresh_token: string
): Promise<RefreshTokenResponse> {
  const response = await authApi.refreshToken(refresh_token);

  return response;
}

export const authService = {
  login,
  refreshToken,
};
