import { queryKeys, useAppQuery } from '@infra';

import { mangaService } from '../manga-service';

export function useGetChaptersByMangaId(mangaId: string) {
  return useAppQuery({
    queryKey: queryKeys.chaptersByMangaId(mangaId),
    queryFn: () => mangaService.getChaptersByMangaId(mangaId),
  });
}
