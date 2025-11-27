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
      className="flex-row flex-wrap p-0"
      style={{
        rowGap: SCREEN_PADDING,
        columnGap: ITEM_MARGIN,
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <GridSkeleton
        width={ITEM_WIDTH}
        height={height}
        arrayLength={NUM_COLUMNS * 8}
      />
    </Page>
  );
}
