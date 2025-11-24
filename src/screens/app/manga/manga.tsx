import { Page, Text } from '@components';
import { Feather } from '@expo/vector-icons';
import { type AppScreenProps } from '@routes';
import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { useGetMangaById } from 'src/domain/manga/use-cases/use-get-manga-by-id';

export function MangaScreen({ route, navigation }: AppScreenProps<'Manga'>) {
  const { id } = route.params;
  const { data, isLoading } = useGetMangaById(id);

  if (isLoading || !data) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Page className="gap-6" scroll>
      <Feather
        name="arrow-left"
        size={24}
        color="white"
        onPress={navigation.goBack}
      />
      <Image
        source={{ uri: data.imageUrl ?? undefined }}
        className="aspect-[3/4] w-full rounded-lg"
        resizeMode="cover"
      />
      <Text weight="semibold" size={'2xl'}>
        {data.title.en}
      </Text>
      <Text size={'lg'}>{data.description}</Text>
    </Page>
  );
}
