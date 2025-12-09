import { type RefreshTokenResponse, type User } from '@domain';
import axios, { type AxiosRequestConfig } from 'axios';

function getBaseUrl(): { url: string } {
  const url = process.env.EXPO_PUBLIC_BASE_URL;
  if (!url) {
    throw new Error('EXPO_PUBLIC_BASE_URL is not set');
  }

  return { url };
}

const { url } = getBaseUrl();

export const api = axios.create({
  baseURL: url,
});

interface InterceptorProps {
  authCredentials: User | null;
  saveCredentials: (user: User) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isRefreshTokenRequest: (request: AxiosRequestConfig) => boolean;
  authenticateByRefreshToken: (
    refreshToken: string
  ) => Promise<RefreshTokenResponse>;
}

export function registerInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
  isRefreshTokenRequest,
  authenticateByRefreshToken,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    (response) => response,
    async (responseReject) => {
      const failedRequest = responseReject.config;
      const hasNotRefreshToken = !authCredentials?.refresh_token;
      const isRefreshToken = isRefreshTokenRequest(failedRequest);

      if (responseReject.response.status === 401) {
        if (hasNotRefreshToken || isRefreshToken || failedRequest.sent) {
          removeCredentials();
          return Promise.reject(responseReject);
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authenticateByRefreshToken(
          authCredentials?.refresh_token
        );
        saveCredentials({
          access_token: newAuthCredentials.access_token,
          refresh_token: authCredentials?.refresh_token,
        });

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.access_token}`;

        return api(failedRequest);
      }

      return Promise.reject(responseReject);
    }
  );

  // remove listener when component unmount
  return () => api.interceptors.response.eject(interceptor);
}
