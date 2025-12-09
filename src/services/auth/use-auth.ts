import { authService } from '@domain';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { storage } from '../storage/storage';
import { type AuthCredentialsType } from './auth-type';

const useAuthCredentialsZustand = create<AuthCredentialsType>()(
  persist(
    (set, get) => ({
      userCredentials: null,
      saveCredentials: async (user) => {
        set({ userCredentials: user });
        return;
      },
      refreshToken: async () => {
        const user = get().userCredentials;
        if (!user) {
          return;
        }
        try {
          const refreshResponse = await authService.refreshToken(
            user.refresh_token
          );

          set({
            userCredentials: {
              ...user,
              access_token: refreshResponse.access_token,
              expires_in: refreshResponse.expires_in,
            },
          });
        } catch {
          console.log('erro ao fazer o refresh');

          set({ userCredentials: null });
        }
      },
      removeCredentials: async () => {
        set({ userCredentials: null });
        return;
      },
      isLoading: true,
    }),
    {
      name: '@Auth',
      storage,
      onRehydrateStorage: () => () => {
        useAuthCredentialsZustand.setState({ isLoading: false });
      },
    }
  )
);

export function useAuth(): AuthCredentialsType['userCredentials'] {
  const user = useAuthCredentialsZustand((state) => state.userCredentials);
  return user;
}

export function useAuthService(): Omit<AuthCredentialsType, 'userCredentials'> {
  const saveCredentials = useAuthCredentialsZustand(
    (state) => state.saveCredentials
  );
  const removeCredentials = useAuthCredentialsZustand(
    (state) => state.removeCredentials
  );

  const refreshToken = useAuthCredentialsZustand((state) => state.refreshToken);

  const isLoading = useAuthCredentialsZustand((state) => state.isLoading);

  return {
    saveCredentials,
    removeCredentials,
    isLoading,
    refreshToken,
  };
}
