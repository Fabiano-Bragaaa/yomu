import { MangaCard, Page, TextInput } from '@components';
import { type MangaSimple, useGetMangaSearch } from '@domain';
import { type AppTabScreenProps } from '@routes';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  type ListRenderItemInfo,
  View,
} from 'react-native';
import { useAppGridSize } from 'src/hooks/use-app-grid-size';
import { useDebounce } from 'src/hooks/use-debounce';

export function SearchScreen({ navigation }: AppTabScreenProps<'Search'>) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const { list, isLoading, fetchNextPage, hasNextPage } =
    useGetMangaSearch(debouncedSearch);
  const { NUM_COLUMNS, ITEM_WIDTH, ITEM_MARGIN, SCREEN_PADDING } =
    useAppGridSize();
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
        width={ITEM_WIDTH}
      />
    );
  }

  return (
    <Page style={{ paddingBottom: 0 }}>
      <FlatList
        data={list}
        ListHeaderComponent={
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search"
          />
        }
        keyExtractor={(item) => item.id}
        numColumns={NUM_COLUMNS}
        columnWrapperStyle={{
          columnGap: ITEM_MARGIN,
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          rowGap: SCREEN_PADDING,
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
