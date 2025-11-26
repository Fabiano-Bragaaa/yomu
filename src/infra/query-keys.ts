export const queryKeys = {
  manga: ['manga'],
  mangaById: (id: string) => ['manga', id],
  chaptersByMangaId: (mangaId: string) => ['chapters', mangaId],
  chapterPages: (chapterId: string) => ['chapter', chapterId],
  mangaSearch: (search: string) => ['manga', 'search', search],
};
