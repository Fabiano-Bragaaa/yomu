import { Page } from '@components';
import { useGetChapterPages } from '@domain';
import { Feather } from '@expo/vector-icons';
import { type AppScreenProps } from '@routes';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  type ListRenderItemInfo,
  TouchableOpacity,
  View,
} from 'react-native';

export function ChapterScreen({ route, navigation }: AppScreenProps<'Chapter'>) {
  const { id } = route.params;
  const { data } = useGetChapterPages(id);

  function renderItem({ item }: ListRenderItemInfo<string>) {
    const { width, height } = Dimensions.get('window');
    return (
      <View style={{ width, height }}>
        <TouchableOpacity className='absolute self-start z-10 p-4'
        onPress={navigation.goBack}
        >
          <Feather
        name="arrow-left"
        size={24}
        color="white"
      />
        </TouchableOpacity>
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
