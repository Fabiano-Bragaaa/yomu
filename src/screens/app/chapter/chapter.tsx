import { Page, Text } from '@components';
import { type AppScreenProps } from '@routes';
import { FlatList, Image, type ListRenderItemInfo } from 'react-native';
import { useGetChapterPages } from 'src/domain/manga/use-cases/use-get-chapter-pages';

export function ChapterScreen({ route }: AppScreenProps<'Chapter'>) {
  const { id } = route.params;
  const { data } = useGetChapterPages(id);

  function renderItem({ item }: ListRenderItemInfo<string>) {
    return (
      <>
        <Text>{item}</Text>
        <Image
          source={{
            uri: `${data?.baseUrl}/data/${data?.chapter.hash}/${item}`,
          }}
          style={{ width: '100%', height: 600 }}
          resizeMode="contain"
        />
      </>
    );
  }

  return (
    <Page>
      <FlatList
        data={data?.chapter.data}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      />
    </Page>
  );
}
