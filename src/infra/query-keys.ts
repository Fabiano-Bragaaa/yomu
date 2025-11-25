export const queryKeys = {
  manga: ['manga'],
  mangaById: (id: string) => ['manga', id],
  chaptersByMangaId: (mangaId: string) => ['chapters', mangaId],
};
