import { Text } from '@components';
import { type MangaSimple } from '@domain';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

type MangaHeaderProps = {
  manga: MangaSimple;
};

export function MangaHeader({ manga }: MangaHeaderProps) {
  const navigation = useNavigation();

  return (
    <View className="gap-6">
      <Feather
        name="arrow-left"
        size={24}
        color="white"
        onPress={navigation.goBack}
      />
      <Image
        source={{ uri: manga.imageUrl ?? undefined }}
        className="aspect-[3/4] w-full rounded-lg"
        resizeMode="cover"
      />
      <Text weight="semibold" size={'2xl'}>
        {manga.title.en}
      </Text>
      <Text size={'lg'}>{manga.description}</Text>
    </View>
  );
}
