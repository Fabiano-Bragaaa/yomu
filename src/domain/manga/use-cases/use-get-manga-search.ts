import { queryKeys, usePaginatedList } from '@infra';

import { mangaService } from '../manga-service';

export function useGetMangaSearch(search: string) {
  return usePaginatedList(queryKeys.mangaSearch(search), (offset) =>
    mangaService.getSearchManga(search, offset)
  );
}
