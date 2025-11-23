import { api } from '@api';

import { type MangaDexResponse } from './manga-type';

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

export const mangaApi = {
  getManga,
};
