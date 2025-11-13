import { type PropsWithChildren } from 'react';
import { ScrollView, View } from 'react-native';

export function ViewPage({ children }: PropsWithChildren) {
  return <View className="flex-1 bg-black/95">{children}</View>;
}

export function ScrollPage({ children }: PropsWithChildren) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-black/95"
    >
      {children}
    </ScrollView>
  );
}
