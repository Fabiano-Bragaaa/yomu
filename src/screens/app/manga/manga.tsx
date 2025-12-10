import { InfinityScrollList, Page, Text } from '@components';
import {
  type MangaChapterSimple,
  mangaService,
  useGetMangaById,
} from '@domain';
import { queryKeys } from '@infra';
import { type AppScreenProps } from '@routes';
import React from 'react';
import { type ListRenderItemInfo } from 'react-native';

import { MangaHeader } from './components/manga-header';

export function MangaScreen({ navigation, route }: AppScreenProps<'Manga'>) {
  const { id } = route.params;
  console.log(id);

  const { data } = useGetMangaById(id);

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
      <InfinityScrollList
        queryKey={queryKeys.chaptersByMangaId(id)}
        getList={(offset) => mangaService.getChaptersByMangaId(id, offset)}
        renderItem={renderItem}
        flatListProps={{
          ListHeaderComponent: <MangaHeader manga={data} />,
          contentContainerStyle: {
            padding: 16,
            gap: 16,
          },
        }}
      />
    </Page>
  );
}
