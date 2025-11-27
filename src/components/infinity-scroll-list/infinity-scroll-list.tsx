import { usePaginatedList } from '@infra';
import { useScrollToTop } from '@react-navigation/native';
import { type JSX, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  type FlatListProps,
  type ListRenderItemInfo,
} from 'react-native';

type ItemTConstraints = {
  id: number | string;
};

type Props<ItemT extends ItemTConstraints> = {
  queryKey: readonly unknown[];
  getList: Parameters<typeof usePaginatedList<ItemT>>[1];
  renderItem: (
    info: ListRenderItemInfo<ItemT> & { onImageLoad: () => void }
  ) => JSX.Element;
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

  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    setImagesLoaded(0);
  }, [list]);

  const totalImages = list.length;
  const isReady = imagesLoaded >= totalImages;

  function handleImageLoad() {
    setImagesLoaded((prev) => prev + 1);
  }

  function ListEmpty() {
    if (!isReady || isLoading) {
      return <>{loadingComponent ?? null}</>;
    }
    return <>{emptyComponent ?? null}</>;
  }

  return (
    <FlatList
      ref={flastListRef}
      data={list}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(info) =>
        renderItem({ ...info, onImageLoad: handleImageLoad })
      }
      onEndReached={() => {
        if (hasNextPage) fetchNextPage();
      }}
      onEndReachedThreshold={0.3}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={ListEmpty}
      ListFooterComponent={
        hasNextPage ? <ActivityIndicator size="small" /> : null
      }
      contentContainerStyle={[
        { flexGrow: 1, justifyContent: 'flex-start' },
        flatListProps?.contentContainerStyle,
      ]}
      {...flatListProps}
    />
  );
}
