import { MangaCard, Page, TextInput } from '@components';
import { type MangaSimple, useGetMangaSearch } from '@domain';
import { getMangaTitle, useAppGridSize, useDebounce } from '@hooks';
import { type AppTabScreenProps } from '@routes';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  type ListRenderItemInfo,
} from 'react-native';

export function SearchScreen({ navigation }: AppTabScreenProps<'Search'>) {
  const [search, setSearch] = useState<string>();
  const { debouncedValue: debouncedSearch, isDebouncing } = useDebounce(search);
  const { list, fetchNextPage, hasNextPage } = useGetMangaSearch(
    debouncedSearch ?? ''
  );
  const { NUM_COLUMNS, ITEM_WIDTH, ITEM_MARGIN, SCREEN_PADDING } =
    useAppGridSize();
  function renderItem({ item }: ListRenderItemInfo<MangaSimple>) {
    return (
      <MangaCard
        imageUrl={item.imageUrl}
        title={getMangaTitle(item.title)}
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
            rightComponent={
              isDebouncing ? (
                <ActivityIndicator size="small" color="#9ca3af" />
              ) : null
            }
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
