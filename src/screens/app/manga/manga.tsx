import { Page, Text } from '@components';
import {
  type MangaChapterSimple,
  useGetChaptersByMangaId,
  useGetMangaById,
} from '@domain';
import { type AppScreenProps } from '@routes';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  type ListRenderItemInfo,
  View,
} from 'react-native';

import { MangaHeader } from './components/manga-header';

export function MangaScreen({ navigation, route }: AppScreenProps<'Manga'>) {
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

  function renderItem({ item }: ListRenderItemInfo<MangaChapterSimple>) {
    return (
      <Text
        key={item.id}
        onPress={() => {
          navigation.navigate('Chapter', { id: item.id });
        }}
      >
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
