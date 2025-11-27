import { Page } from '@components';
import { useAppGridSize } from '@hooks';
import { useWindowDimensions } from 'react-native';
import { GridSkeleton } from 'src/components/skeletons';

export function HomeSkeleton() {
  const { NUM_COLUMNS, ITEM_WIDTH, ITEM_MARGIN, SCREEN_PADDING } =
    useAppGridSize();
  const height = useWindowDimensions().height * 0.2;
  return (
    <Page
      className="flex-row flex-wrap"
      style={{ rowGap: SCREEN_PADDING, columnGap: ITEM_MARGIN }}
    >
      <GridSkeleton
        width={ITEM_WIDTH}
        height={height}
        arrayLength={NUM_COLUMNS * 8}
      />
    </Page>
  );
}
