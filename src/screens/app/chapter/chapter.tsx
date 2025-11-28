import { Page } from '@components';
import { useGetChapterPages } from '@domain';
import { type AppScreenProps } from '@routes';
import {
  Dimensions,
  FlatList,
  Image,
  type ListRenderItemInfo,
  View,
} from 'react-native';

export function ChapterScreen({ route }: AppScreenProps<'Chapter'>) {
  const { id } = route.params;
  const { data } = useGetChapterPages(id);

  function renderItem({ item }: ListRenderItemInfo<string>) {
    const { width, height } = Dimensions.get('window');
    return (
      <View className="flex-1 items-center justify-center">
        <Image
          source={{
            uri: `${data?.baseUrl}/data/${data?.chapter.hash}/${item}`,
          }}
          style={{ width, height }}
          resizeMode="contain"
        />
      </View>
    );
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
