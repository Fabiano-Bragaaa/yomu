import { Page, Text } from '@components';
import { type AppScreenProps } from '@routes';
import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { useGetMangaById } from 'src/domain/manga/use-cases/use-get-manga-by-id';

export function MangaScreen({ route }: AppScreenProps<'Manga'>) {
  const { id } = route.params;
  const { data, isLoading } = useGetMangaById(id);

  if (isLoading || !data) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Page>
      <Image
        source={{ uri: data.imageUrl ?? undefined }}
        className="aspect-[3/4] w-full rounded-lg"
      />
      <Text>
        {data.title.en}
        {id}
      </Text>
    </Page>
  );
}
