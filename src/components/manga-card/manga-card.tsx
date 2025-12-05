import { useAppGridSize } from '@hooks';
import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';

import { MangaSkeleton } from '../skeletons/manga-skeleton';
import { Text } from '../text/text';

type MangaCardProps = {
  imageUrl: string | null;
  title?: string;
  onPress: () => void;
};

export function MangaCard({ imageUrl, title, onPress }: MangaCardProps) {
  const [loading, setLoading] = useState(true);
  const { ITEM_WIDTH } = useAppGridSize();
  const IMAGE_HEIGHT = ITEM_WIDTH * (4 / 3);

  return (
    <Pressable className="w-[30%] gap-2" onPress={onPress}>
      <View className="aspect-[3/4] items-center  justify-center rounded-lg">
        <Image
          source={{ uri: imageUrl ?? undefined }}
          className="absolute inset-0 rounded-lg"
          style={{ width: '100%', height: '100%' }}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />

        {loading && <MangaSkeleton width={ITEM_WIDTH} height={IMAGE_HEIGHT} />}
      </View>

      <Text size="sm" numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
}
