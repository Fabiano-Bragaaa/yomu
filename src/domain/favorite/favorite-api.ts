import { api } from '@api';

import { type FavoriteMangaResponse } from './favorite-type';

async function getFavorites({
  offset = 0,
  limit = 20,
  token,
}: {
  offset?: number;
  limit?: number;
  token: string;
}): Promise<FavoriteMangaResponse> {
  const { data } = await api.get<FavoriteMangaResponse>('/user/follows/manga', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
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

async function followManga(mangaId: string, token: string): Promise<void> {
  await api.post<void>(`/manga/${mangaId}/follow`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const favoriteApi = {
  getFavorites,
  followManga,
};
