import { Page } from '@components';
import { useGetChapterPages } from '@domain';
import { type AppScreenProps } from '@routes';
import React from 'react';
import { FlatList, type ListRenderItemInfo } from 'react-native';

import { ChapterItem } from './components/chapter-item';

export function ChapterScreen({ route }: AppScreenProps<'Chapter'>) {
  const { id } = route.params;
  const { data } = useGetChapterPages(id);

  const uri = `${data?.baseUrl}/data/${data?.chapter.hash}`;

  function renderItem({ item }: ListRenderItemInfo<string>) {
    return <ChapterItem uri={`${uri}/${item}`} />;
  }

  return (
    <Page className="p-0">
      <FlatList
        horizontal
        pagingEnabled
        data={data?.chapter.data}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Page>
  );
}
