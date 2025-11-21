import { Image, View } from 'react-native';

import { Text } from '../text/text';

type MangaCardProps = {
  imageUrl: string | null;
  title?: string;
};

export function MangaCard({ imageUrl, title }: MangaCardProps) {
  console.log('IMAGE URL => ', imageUrl);

  return (
    <View className="w-[30%] gap-2">
      <Image
        source={{ uri: imageUrl ?? undefined }}
        className="aspect-[3/4] w-full rounded-lg"
      />
      <Text size="sm" numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
}
