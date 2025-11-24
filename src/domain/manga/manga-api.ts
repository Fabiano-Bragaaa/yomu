import { api } from '@api';

import {
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

export const mangaApi = {
  getManga,
  getMangaById,
};
