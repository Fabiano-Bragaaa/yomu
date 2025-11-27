import ContentLoader, { Rect } from 'react-content-loader/native';
import { View } from 'react-native';

import { type SkeletonSizeProps } from './types';

export function GridSkeleton({
  width,
  height,
  arrayLength = 4,
}: SkeletonSizeProps & { arrayLength?: number }) {
  return (
    <>
      {Array.from({ length: arrayLength }, (_, index) => (
        <View key={index} className="mb-4">
          <ContentLoader
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
          >
            <Rect x="0" y="0" rx="12" ry="12" width={width} height={height} />
          </ContentLoader>
        </View>
      ))}
    </>
  );
}
