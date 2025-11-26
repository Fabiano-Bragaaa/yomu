import { Dimensions } from 'react-native';

export function useAppGridSize() {
  const NUM_COLUMNS = 3;
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_PADDING = 24;
  const ITEM_MARGIN = 16;
  const ITEM_WIDTH =
    (SCREEN_WIDTH - SCREEN_PADDING * 2 - ITEM_MARGIN) / NUM_COLUMNS;

  return {
    NUM_COLUMNS,
    SCREEN_WIDTH,
    SCREEN_PADDING,
    ITEM_MARGIN,
    ITEM_WIDTH,
  };
}
