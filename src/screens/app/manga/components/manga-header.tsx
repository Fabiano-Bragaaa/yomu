import { Text } from '@components';
import { type MangaSimple, useFavoriteManga } from '@domain';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

type MangaHeaderProps = {
  manga: MangaSimple;
};

export function MangaHeader({ manga }: MangaHeaderProps) {
  const navigation = useNavigation();
  const { toggleFavorite, isFavorite } = useFavoriteManga();

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
        <TouchableOpacity
          onPress={toggleFavorite}
          className="m-4 items-center justify-center self-end rounded-full bg-white p-4"
        >
          <Feather
            name="heart"
            size={24}
            color={isFavorite ? '#ff0000' : '#000'}
          />
        </TouchableOpacity>
      </ImageBackground>
      <Text weight="semibold" size={'2xl'}>
        {manga.title.en}
      </Text>
      <Text size={'lg'}>{manga.description}</Text>
    </View>
  );
}
