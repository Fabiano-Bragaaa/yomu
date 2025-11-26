import { queryKeys, useAppQuery } from '@infra';

import { mangaService } from '../manga-service';

export function useGetChapterPages(chapterId: string) {
  return useAppQuery({
    queryKey: queryKeys.chapterPages(chapterId),
    queryFn: () => mangaService.getChapterPages(chapterId),
  });
}
