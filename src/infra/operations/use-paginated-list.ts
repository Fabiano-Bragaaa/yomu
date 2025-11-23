import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { type PaginatedResponse } from './types';

interface PaginatedListOptions {
  enabled?: boolean;
  staleTime?: number;
}

export function usePaginatedList<T>(
  queryKey: readonly unknown[],
  getList: (offset: number) => Promise<PaginatedResponse<T>>,
  options?: PaginatedListOptions
) {
  const [list, setList] = useState<T[]>([]);

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

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.flatMap((page) => page.data);
      setList(newList);
    }
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
