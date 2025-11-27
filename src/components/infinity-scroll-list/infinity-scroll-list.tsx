import { usePaginatedList } from '@infra';
import { useScrollToTop } from '@react-navigation/native';
import { useRef } from 'react';
import { FlatList, type FlatListProps } from 'react-native';

type ItemTConstraints = {
  id: number | string;
};

type Props<ItemT extends ItemTConstraints> = {
  queryKey: readonly unknown[];
  getList: Parameters<typeof usePaginatedList<ItemT>>[1];
  renderItem: FlatListProps<ItemT>['renderItem'];
  flatListProps?: Omit<Partial<FlatListProps<ItemT>>, 'renderItem'>;
};

export function InfinityScrollList<ItemT extends ItemTConstraints>({
  queryKey,
  getList,
  renderItem,
  flatListProps,
}: Props<ItemT>) {
  const flastListRef = useRef<FlatList<ItemT>>(null);
  useScrollToTop(flastListRef);

  const { list, fetchNextPage, hasNextPage } = usePaginatedList(
    queryKey,
    getList
  );

  return (
    <FlatList
      ref={flastListRef}
      data={list}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      onEndReached={() => {
        if (hasNextPage) fetchNextPage();
      }}
      onEndReachedThreshold={0.3}
      showsVerticalScrollIndicator={false}
      {...flatListProps}
      contentContainerStyle={[
        { flex: list.length === 0 ? 1 : undefined },
        flatListProps?.contentContainerStyle,
      ]}
    />
  );
}
