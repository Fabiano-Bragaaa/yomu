import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { type PaginatedResponse } from './types';

interface PaginatedListOptions {
  enabled?: boolean;
  staleTime?: number;
}

type ItemWithId = {
  id: string | number;
};

export function usePaginatedList<T extends ItemWithId>(
  queryKey: readonly unknown[],
  getList: (offset: number) => Promise<PaginatedResponse<T>>,
  options?: PaginatedListOptions
) {
  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 0 }) => getList(pageParam),
    getNextPageParam: (lastPage) => {
      const { offset, limit, total } = lastPage;

      const nextOffset = offset + limit;

      if (nextOffset >= total) return undefined;

      return nextOffset;
    },
    initialPageParam: 0,
    retry: false,
    staleTime: options?.staleTime,
    enabled: options?.enabled,
  });

  const list = useMemo(() => {
    if (!query.data) return [];

    const allItems = query.data.pages.flatMap((page) => page.data);

    const uniqueMap = new Map<string | number, T>();
    allItems.forEach((item) => {
      uniqueMap.set(item.id, item);
    });

    return Array.from(uniqueMap.values());
  }, [query.data]);

  return {
    list,
    isLoading: query.isPending,
    error: query.error,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
    refetch: query.refetch,
  };
}
