import { authService } from '@domain';
import { useEffect } from 'react';

import { useAuth, useAuthService } from './use-auth';

export function useAuthStartup() {
  const user = useAuth();
  const { isLoading, refreshToken, saveCredentials } = useAuthService();

  useEffect(() => {
    if (isLoading) return;

    async function init() {
      if (!user) {
        const loginResponse = await authService.login();
        await saveCredentials(loginResponse);
        return;
      }

      await refreshToken();
    }

    init();
  }, [isLoading]);

  if (!user) return null;
}
