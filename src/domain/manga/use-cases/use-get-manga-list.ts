import { queryKeys, usePaginatedList } from '@infra';

import { mangaService } from '../manga-service';

export function useGetMangaList() {
  return usePaginatedList(queryKeys.manga, mangaService.getManga);
}
