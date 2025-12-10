import { MangaDetailsImageSkeleton, Text } from '@components';
import {
  type MangaSimple,
  useCheckFavoriteManga,
  useToggleFavoriteManga,
} from '@domain';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@services';
import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

type MangaHeaderProps = {
  manga?: MangaSimple;
};

export function MangaHeader({ manga }: MangaHeaderProps) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const user = useAuth();
  const { isFavorite } = useCheckFavoriteManga({
    mangaId: manga?.id,
    token: user?.access_token,
  });

  const { toggleFavorite } = useToggleFavoriteManga();

  function followManga() {
    if (user && manga?.id) {
      console.log(manga.id);
      toggleFavorite(manga.id, user.access_token);
    }
  }

  return (
    <View className="gap-6">
      <Feather
        name="arrow-left"
        size={24}
        color="white"
        onPress={navigation.goBack}
      />
      <View className="aspect-[3/4] w-full overflow-hidden rounded-lg">
        {manga?.imageUrl && (
          <ImageBackground
            source={{ uri: manga.imageUrl }}
            className="flex-1"
            resizeMode="cover"
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
          >
            <TouchableOpacity
              onPress={followManga}
              className="m-4 items-center justify-center self-end rounded-full bg-white p-4"
            >
              <Feather
                name="heart"
                size={24}
                color={isFavorite ? '#ff0000' : '#000'}
              />
            </TouchableOpacity>
          </ImageBackground>
        )}
        {loading && <MangaDetailsImageSkeleton />}
      </View>
      <Text weight="semibold" size={'2xl'}>
        {manga?.title.en}
      </Text>
      <Text size={'lg'}>{manga?.description}</Text>
    </View>
  );
}
