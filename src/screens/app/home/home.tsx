import { MangaCard, Page } from '@components';
import { type AppTabScreenProps } from '@routes';
import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useGetMangaList } from 'src/domain/manga/use-cases/use-get-manga-list';

export function HomeScreen(_props: AppTabScreenProps<'Home'>) {
  const { list, isLoading, fetchNextPage, hasNextPage } = useGetMangaList();

  if (isLoading || !list) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
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
        renderItem={({ item }) => (
          <MangaCard imageUrl={item.imageUrl} title={item.title.en} />
        )}
        onEndReached={() => {
          if (hasNextPage) fetchNextPage();
        }}
        onEndReachedThreshold={0.3}
      />
    </Page>
  );
}
