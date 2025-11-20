import { Image, View } from 'react-native';

import { Text } from '../text/text';

export function MangaCard() {
  return (
    <View className="w-[30%] gap-2">
      <Image
        source={{ uri: 'https://github.com/fabiano-bragaaa.png' }}
        className="aspect-[3/4] w-full rounded-lg"
      />
      <Text size="sm" numberOfLines={2}>
        Manga Title
      </Text>
    </View>
  );
}
