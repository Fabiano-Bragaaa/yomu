import { InfinityScrollList, MangaCard, Page, TextInput } from '@components';
import { mangaService, type MangaSimple } from '@domain';
import { getMangaTitle, useAppGridSize, useDebounce } from '@hooks';
import { queryKeys } from '@infra';
import { type AppTabScreenProps } from '@routes';
import React, { useState } from 'react';
import { ActivityIndicator, type ListRenderItemInfo } from 'react-native';

export function SearchScreen({ navigation }: AppTabScreenProps<'Search'>) {
  const [search, setSearch] = useState<string>();
  const { debouncedValue: debouncedSearch, isDebouncing } = useDebounce(search);
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
      <InfinityScrollList
        queryKey={queryKeys.mangaSearch(debouncedSearch ?? '')}
        getList={(offset) =>
          mangaService.getSearchManga(debouncedSearch ?? '', offset)
        }
        renderItem={renderItem}
        flatListProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {
            columnGap: ITEM_MARGIN,
          },
          contentContainerStyle: {
            rowGap: SCREEN_PADDING,
          },
          ListHeaderComponent: (
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
          ),
        }}
      />
    </Page>
  );
}
