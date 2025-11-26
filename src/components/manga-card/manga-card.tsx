import { Image, Pressable } from 'react-native';

import { Text } from '../text/text';

type MangaCardProps = {
  imageUrl: string | null;
  title?: string;
  onPress: () => void;
  width: number;
};

export function MangaCard({ imageUrl, title, onPress, width }: MangaCardProps) {
  return (
    <Pressable className="w-[30%] gap-2" onPress={onPress}>
      <Image
        source={{ uri: imageUrl ?? undefined }}
        className="aspect-[3/4] rounded-lg"
        style={{ width }}
      />
      <Text size="sm" numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
}
