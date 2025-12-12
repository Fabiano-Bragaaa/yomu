import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  render,
  renderHook,
  type RenderHookOptions,
  type RenderOptions,
} from '@testing-library/react-native';
import { type ReactElement, type ReactNode } from 'react';

import { queryClientOptions } from './query-client-options';

export const wrapperAllProviders = () => {
  return ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient(queryClientOptions);

    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
};

export const renderComponent = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: wrapperAllProviders(), ...options });

function customRenderHook<Result, Props>(
  renderCallBack: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>
) {
  return renderHook(renderCallBack, {
    wrapper: wrapperAllProviders(),
    ...options,
  });
}

export const wrapperScreenProviders = () => {
  const queryClient = new QueryClient(queryClientOptions);

  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer> {children} </NavigationContainer>
    </QueryClientProvider>
  );
};

function renderScreen<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(component, { wrapper: wrapperScreenProviders(), ...options });
}

export * from '@testing-library/react-native';
export { renderComponent as render };
export { customRenderHook as renderHook };
export { renderScreen };
