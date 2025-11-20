import { MangaCard, Page } from '@components';
import { type AppTabScreenProps } from '@routes';
import React from 'react';
import { View } from 'react-native';

export function HomeScreen({}: AppTabScreenProps<'Home'>) {
  return (
    <Page>
      <View className="flex-row flex-wrap gap-4">
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
      </View>
    </Page>
  );
}
