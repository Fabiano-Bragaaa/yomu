import { queryKeys, useAppQuery } from '@infra';

import { mangaService } from '../manga-service';

export function useGetMangaById(id: string) {
  return useAppQuery({
    queryKey: queryKeys.mangaById(id),
    queryFn: () => mangaService.getMangaById(id),
  });
}
