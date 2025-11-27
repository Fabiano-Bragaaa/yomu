import { usePaginatedList } from '@infra';
import { useScrollToTop } from '@react-navigation/native';
import { useRef } from 'react';
import { FlatList, type FlatListProps, RefreshControl } from 'react-native';

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

  const { list, isLoading, fetchNextPage, hasNextPage, refetch } =
    usePaginatedList(queryKey, getList);

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
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
      refreshing={isLoading}
      showsVerticalScrollIndicator={false}
      {...flatListProps}
      contentContainerStyle={[
        { flex: list.length === 0 ? 1 : undefined },
        flatListProps?.contentContainerStyle,
      ]}
    />
  );
}
