import { useWindowDimensions, View } from 'react-native';

import { RectangleSkeleton } from './rectagle-skeleton';

export function MangaDetailsImageSkeleton() {
  const { width } = useWindowDimensions();

  const imageHeight = width * (4 / 3);

  return (
    <View className=" gap-6">
      <RectangleSkeleton width={width * 0.85} height={imageHeight} />
    </View>
  );
}
