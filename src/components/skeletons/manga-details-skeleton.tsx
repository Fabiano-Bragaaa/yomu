import React from 'react';
import { useWindowDimensions, View } from 'react-native';

import { RectangleSkeleton } from './rectagle-skeleton';

export function MangaDetailsSkeleton() {
  const { width, height: fullHeight } = useWindowDimensions();

  const imageHeight = width * (4 / 3);

  return (
    <View className=" gap-6">
      <RectangleSkeleton width={34} height={34} />

      <RectangleSkeleton width={width * 0.85} height={imageHeight} />

      <RectangleSkeleton width={width * 0.6} height={fullHeight * 0.03} />

      <RectangleSkeleton width={width * 0.85} height={fullHeight * 0.3} />
    </View>
  );
}
