import { FeedSkeleton, InfinityScrollList, MangaCard, Page } from '@components';
import { mangaService, type MangaSimple } from '@domain';
import { getMangaTitle, useAppGridSize } from '@hooks';
import { queryKeys } from '@infra';
import { type AppTabScreenProps } from '@routes';
import React from 'react';
import { type ListRenderItemInfo } from 'react-native';

export function HomeScreen({ navigation }: AppTabScreenProps<'Home'>) {
  const { NUM_COLUMNS, ITEM_MARGIN, SCREEN_PADDING } = useAppGridSize();

  function renderItem({ item }: ListRenderItemInfo<MangaSimple>) {
    return (
      <MangaCard
        imageUrl={item.imageUrl}
        title={getMangaTitle(item.title)}
        onPress={() => {
          navigation.navigate('Manga', { id: item.id });
        }}
      />
    );
  }

  return (
    <Page style={{ paddingBottom: 0 }}>
      <InfinityScrollList
        queryKey={queryKeys.manga}
        getList={mangaService.getManga}
        renderItem={renderItem}
        flatListProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {
            columnGap: ITEM_MARGIN,
          },
          contentContainerStyle: {
            rowGap: SCREEN_PADDING,
          },
        }}
        loadingComponent={<FeedSkeleton />}
      />
    </Page>
  );
}
