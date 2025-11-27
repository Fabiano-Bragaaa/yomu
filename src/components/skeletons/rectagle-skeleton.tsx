import ContentLoader, { Rect } from 'react-content-loader/native';

import { type SkeletonSizeProps } from './types';

export function RectangleSkeleton({ height, width }: SkeletonSizeProps) {
  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
    >
      <Rect x="0" y="0" rx="12" ry="12" width={width} height={height} />
    </ContentLoader>
  );
}
