import { FeedSkeleton, InfinityScrollList, MangaCard, Page } from '@components';
import { favoriteService, type MangaSimple } from '@domain';
import { getMangaTitle, useAppGridSize } from '@hooks';
import { queryKeys } from '@infra';
import { type AppTabScreenProps } from '@routes';
import { useAuth } from '@services';
import React from 'react';
import { type ListRenderItemInfo } from 'react-native';

export function FavoritesScreen({
  navigation,
}: AppTabScreenProps<'Favorites'>) {
  const { NUM_COLUMNS, ITEM_MARGIN, SCREEN_PADDING } = useAppGridSize();
  const user = useAuth();

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
      {user && (
        <InfinityScrollList
          queryKey={queryKeys.favorite}
          getList={(offset) =>
            favoriteService.getFavorites(offset, user.access_token)
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
          }}
          loadingComponent={<FeedSkeleton />}
        />
      )}
    </Page>
  );
}
