import { usePaginatedList } from '@infra';
import { useScrollToTop } from '@react-navigation/native';
import { useRef } from 'react';
import { ActivityIndicator, FlatList, type FlatListProps } from 'react-native';

type ItemTConstraints = {
  id: number | string;
};

type Props<ItemT extends ItemTConstraints> = {
  queryKey: readonly unknown[];
  getList: Parameters<typeof usePaginatedList<ItemT>>[1];
  renderItem: FlatListProps<ItemT>['renderItem'];
  flatListProps?: Omit<Partial<FlatListProps<ItemT>>, 'renderItem'>;
  loadingComponent?: React.ReactNode;
  emptyComponent?: React.ReactNode;
};

export function InfinityScrollList<ItemT extends ItemTConstraints>({
  queryKey,
  getList,
  renderItem,
  flatListProps,
  loadingComponent,
  emptyComponent,
}: Props<ItemT>) {
  const flastListRef = useRef<FlatList<ItemT>>(null);
  useScrollToTop(flastListRef);

  const { list, fetchNextPage, hasNextPage, isLoading } = usePaginatedList(
    queryKey,
    getList
  );

  function ListEmpty() {
    if (isLoading) {
      return <>{loadingComponent ?? null}</>;
    }
    return <>{emptyComponent ?? null}</>;
  }

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
      ListEmptyComponent={ListEmpty}
      ListFooterComponent={<ActivityIndicator size="small" />}
      contentContainerStyle={[
        { flexGrow: 1, justifyContent: 'flex-start' },
        flatListProps?.contentContainerStyle,
      ]}
      {...flatListProps}
    />
  );
}
