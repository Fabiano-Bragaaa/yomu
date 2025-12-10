import { api } from '@api';

import {
  type MangaDexAtHomeResponse,
  type MangaDexChapterResponse,
  type MangaDexManga,
  type MangaDexResponse,
  type MangaDexSingleResponse,
} from './manga-type';

async function getManga(offset = 0, limit = 20): Promise<MangaDexResponse> {
  const { data } = await api.get<MangaDexResponse>('/manga', {
    params: {
      availableTranslatedLanguage: ['en'],
      includes: ['cover_art'],
      contentRating: ['safe'],
      limit,
      offset,
    },
    paramsSerializer: {
      indexes: false,
    },
  });

  return data;
}
async function getSearchManga(
  search: string,
  offset = 0,
  limit = 20
): Promise<MangaDexResponse> {
  const { data } = await api.get<MangaDexResponse>('/manga', {
    params: {
      title: search,
      limit,
      offset,
      contentRating: ['safe'],
      'order[updatedAt]': 'desc',
      includes: ['cover_art'],
    },
    paramsSerializer: {
      indexes: false,
    },
  });

  return data;
}

async function getMangaById(id: string): Promise<MangaDexManga> {
  const { data } = await api.get<MangaDexSingleResponse>(`/manga/${id}`, {
    params: {
      includes: ['cover_art'],
    },
    paramsSerializer: {
      indexes: false,
    },
  });
  return data.data;
}

async function getChaptersByMangaId(
  mangaId: string,
  limit = 20,
  offset = 0
): Promise<MangaDexChapterResponse> {
  const { data } = await api.get<MangaDexChapterResponse>(
    `/manga/${mangaId}/feed`,
    {
      params: {
        limit,
        offset,
        translatedLanguage: ['en'],
        'order[chapter]': 'desc',
      },
    }
  );
  return data;
}

async function getChapterPages(
  chapterId: string
): Promise<MangaDexAtHomeResponse> {
  const { data } = await api.get<MangaDexAtHomeResponse>(
    `/at-home/server/${chapterId}`
  );
  return data;
}

export const mangaApi = {
  getManga,
  getSearchManga,
  getMangaById,
  getChaptersByMangaId,
  getChapterPages,
};
