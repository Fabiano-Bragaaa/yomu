import { Page, Text } from '@components';
import { type MangaChapterSimple } from '@domain';
import { type AppScreenProps } from '@routes';
import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useGetChaptersByMangaId } from 'src/domain/manga/use-cases/use-get-chapters-by-manga-id';
import { useGetMangaById } from 'src/domain/manga/use-cases/use-get-manga-by-id';

import { MangaHeader } from './components/manga-header';

export function MangaScreen({ route }: AppScreenProps<'Manga'>) {
  const { id } = route.params;
  const { list, isLoading, fetchNextPage, hasNextPage } =
    useGetChaptersByMangaId(id);
  const { data } = useGetMangaById(id);

  if (isLoading || !list || !data) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  function renderItem({ item }: { item: MangaChapterSimple }) {
    return (
      <Text key={item.id}>
        {item.attributes.chapter} - {item.attributes.title}
      </Text>
    );
  }

  return (
    <Page>
      <FlatList
        ListHeaderComponent={<MangaHeader manga={data} />}
        data={list}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: 16,
          gap: 16,
        }}
        renderItem={renderItem}
        onEndReached={() => {
          if (hasNextPage) fetchNextPage();
        }}
        onEndReachedThreshold={0.3}
      />
    </Page>
  );
}
