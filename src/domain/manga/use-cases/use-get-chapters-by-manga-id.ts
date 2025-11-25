import { queryKeys, usePaginatedList } from '@infra';

import { mangaService } from '../manga-service';

export function useGetChaptersByMangaId(mangaId: string) {
  return usePaginatedList(queryKeys.chaptersByMangaId(mangaId), (offset) =>
    mangaService.getChaptersByMangaId(mangaId, offset)
  );
}
