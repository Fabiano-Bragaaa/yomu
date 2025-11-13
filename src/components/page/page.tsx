import { useAppSafeArea } from '@hooks';
import { type PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { ScrollPage, ViewPage } from './components/page-container';

export type PageProps = PropsWithChildren & {
  scroll?: boolean;
  className?: string;
};

export function Page({ children, scroll = false, className }: PageProps) {
  const { top, bottom } = useAppSafeArea();
  const Container = scroll ? ScrollPage : ViewPage;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <View
          className={twMerge('px-4', className)}
          style={{ paddingTop: top, paddingBottom: bottom }}
        >
          {children}
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}
