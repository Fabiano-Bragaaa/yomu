import axios, { type AxiosRequestConfig } from 'axios';

import { type RefreshTokenResponse, type User } from './auth-type';

function getAuthUrl(): { url: string } {
  const url = process.env.EXPO_PUBLIC_AUTH_URL;
  if (!url) {
    throw new Error('EXPO_PUBLIC_AUTH_URL is not set');
  }

  return { url };
}

interface ParamsResponse {
  client_id: string;
  client_secret: string;
  grant_type: string;
  username: string;
  password: string;
}

function getParams(): ParamsResponse {
  const client_id = process.env.EXPO_PUBLIC_CLIENT_ID;
  const client_secret = process.env.EXPO_PUBLIC_CLIENT_SECRET;
  const grant_type = process.env.EXPO_PUBLIC_GRANT_TYPE;
  const username = process.env.EXPO_PUBLIC_USERNAME;
  const password = process.env.EXPO_PUBLIC_PASSWORD;

  if (!client_id || !client_secret || !grant_type || !username || !password) {
    throw new Error('Missing environment variables');
  }

  return {
    client_id,
    client_secret,
    grant_type,
    username,
    password,
  };
}

interface RefreshParamsResponse {
  client_id: string;
  client_secret: string;
  grant_type: string;
}

function getRefreshParams(): RefreshParamsResponse {
  const client_id = process.env.EXPO_PUBLIC_CLIENT_ID;
  const client_secret = process.env.EXPO_PUBLIC_CLIENT_SECRET;
  const grant_type = process.env.EXPO_PUBLIC_GRANT_TYPE_REFRESH;

  if (!client_id || !client_secret) {
    throw new Error('Missing environment variables for refresh');
  }

  return { client_id, client_secret, grant_type };
}

const { url } = getAuthUrl();
const envParams = getParams();
const envRefreshParams = getRefreshParams();

async function login(): Promise<User> {
  const params = new URLSearchParams();

  params.set('client_id', envParams.client_id);
  params.set('client_secret', envParams.client_secret);
  params.set('grant_type', envParams.grant_type);
  params.set('username', envParams.username);
  params.set('password', envParams.password);

  const response = await axios.post(url, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  console.log('login feito com sucesso');
  console.log('data', response.data);

  return response.data;
}

async function refreshToken(
  refresh_token: string
): Promise<RefreshTokenResponse> {
  const params = new URLSearchParams();

  params.set('client_id', envRefreshParams.client_id);
  params.set('client_secret', envRefreshParams.client_secret);
  params.set('grant_type', envRefreshParams.grant_type);
  params.set('refresh_token', refresh_token);

  const response = await axios.post(url, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  console.log('refresh feito com sucesso');
  console.log('refresh data', response.data);

  return response.data;
}

function isRefreshTokenRequest(request: AxiosRequestConfig): boolean {
  return request.url === url;
}

export const authApi = {
  login,
  refreshToken,
  isRefreshTokenRequest,
};
