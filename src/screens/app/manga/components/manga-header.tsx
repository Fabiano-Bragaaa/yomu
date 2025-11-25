import { Text } from '@components';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';
import { useGetMangaById } from 'src/domain/manga/use-cases/use-get-manga-by-id';

type MangaHeaderProps = {
  id: string;
};

export function MangaHeader({ id }: MangaHeaderProps) {
  const navigation = useNavigation();
  const { data } = useGetMangaById(id);

  if (!data) {
    return null;
  }

  return (
    <View className="gap-6">
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
    </View>
  );
}
