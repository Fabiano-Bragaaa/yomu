import { MangaCard, Page } from '@components';
import { type MangaSimple, useGetMangaList } from '@domain';
import { type AppTabScreenProps } from '@routes';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  type ListRenderItemInfo,
  View,
} from 'react-native';

const NUM_COLUMNS = 3;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = 24;
const ITEM_MARGIN = 16;
const ITEM_WIDTH =
  (SCREEN_WIDTH - SCREEN_PADDING * 2 - ITEM_MARGIN) / NUM_COLUMNS;

export function HomeScreen({ navigation }: AppTabScreenProps<'Home'>) {
  const { list, isLoading, fetchNextPage, hasNextPage } = useGetMangaList();

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
        keyExtractor={(item) => item.id}
        numColumns={NUM_COLUMNS}
        columnWrapperStyle={{
          columnGap: ITEM_MARGIN,
        }}
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
