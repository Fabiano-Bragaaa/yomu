import { api } from '@api';

import { type MangaDexResponse } from './manga-type';

async function getManga(): Promise<MangaDexResponse> {
  const { data } = await api.get<MangaDexResponse>('/manga', {
    params: {
      originalLanguage: ['en'],
      includes: ['cover_art'],
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
