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
      originalLanguage: ['en'],
      includes: ['cover_art'],
      limit,
      offset,
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
  getMangaById,
  getChaptersByMangaId,
  getChapterPages,
};
