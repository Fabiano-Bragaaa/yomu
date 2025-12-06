import { Text } from '@components';
import { type MangaSimple } from '@domain';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground,  TouchableOpacity, View } from 'react-native';

type MangaHeaderProps = {
  manga: MangaSimple;
};

export function MangaHeader({ manga }: MangaHeaderProps) {
  const navigation = useNavigation();

  function toggleFavorite() {
    //TODO: toggle favorite     
  }

  return (
    <View className="gap-6">
      <Feather
        name="arrow-left"
        size={24}
        color="white"
        onPress={navigation.goBack}
      />
      <ImageBackground
        source={{ uri: manga.imageUrl ?? undefined }}
        className="aspect-[3/4] w-full rounded-lg"
        resizeMode="cover"
      >
        <TouchableOpacity onPress={toggleFavorite} className='p-4 bg-white rounded-full items-center justify-center self-end m-4'>
          <Feather name='heart' size={24} color='black' />
        </TouchableOpacity>
      </ImageBackground>
      <Text weight="semibold" size={'2xl'}>
        {manga.title.en}
      </Text>
      <Text size={'lg'}>{manga.description}</Text>
    </View>
  );
}
