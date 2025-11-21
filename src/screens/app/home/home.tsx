import { MangaCard, Page } from '@components';
import { type AppTabScreenProps } from '@routes';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useGetMangaList } from 'src/domain/manga/use-cases/use-get-manga-list';

export function HomeScreen(_props: AppTabScreenProps<'Home'>) {
  const { data, isLoading } = useGetMangaList();

  if (isLoading || !data) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Page>
      <View className="flex-row flex-wrap items-center gap-4">
        {data.map((manga) => (
          <MangaCard
            key={manga.id}
            imageUrl={manga.imageUrl}
            title={manga.title.en}
          />
        ))}
      </View>
    </Page>
  );
}
