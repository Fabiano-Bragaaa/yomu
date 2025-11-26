import { MangaCard, Page } from '@components';
import { type MangaSimple, useGetMangaSearch } from '@domain';
import { type AppTabScreenProps } from '@routes';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  type ListRenderItemInfo,
  View,
} from 'react-native';

export function SearchScreen({ navigation }: AppTabScreenProps<'Search'>) {
  const { list, isLoading, fetchNextPage, hasNextPage } =
    useGetMangaSearch('naruto');

  if (isLoading || !list) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  function renderItem({ item }: ListRenderItemInfo<MangaSimple>) {
    return (
      <MangaCard
        imageUrl={item.imageUrl}
        title={item.title.en}
        onPress={() => {
          navigation.navigate('Manga', { id: item.id });
        }}
      />
    );
  }

  return (
    <Page style={{ paddingBottom: 0 }}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 16,
        }}
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
