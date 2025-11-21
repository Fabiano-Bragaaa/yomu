import { queryKeys, useAppQuery } from '@infra';

import { mangaService } from '../manga-service';

export function useGetMangaList() {
  return useAppQuery({
    queryKey: queryKeys.manga,
    queryFn: mangaService.getManga,
  });
}
