import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { storage } from '../storage/storage';
import { type AuthCredentialsType } from './auth-type';

const useAuthCredentialsZustand = create<AuthCredentialsType>()(
  persist(
    (set) => ({
      userCredentials: null,
      saveCredentials: async (user) => {
        set({ userCredentials: user });
        return;
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

export function useAuthService():Omit<AuthCredentialsType, 'userCredentials'> {
  const saveCredentials = useAuthCredentialsZustand((state) => state.saveCredentials);
  const removeCredentials = useAuthCredentialsZustand((state) => state.removeCredentials);
  const isLoading = useAuthCredentialsZustand((state) => state.isLoading);

  return {
    saveCredentials,
    removeCredentials,
    isLoading,
  };
}