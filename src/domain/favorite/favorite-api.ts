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
  await api.post<void>(
    `/manga/${mangaId}/follow`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

async function unfollowManga(mangaId: string, token: string): Promise<void> {
  await api.delete<void>(`/manga/${mangaId}/follow`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

async function checkMangaFavoriteStatus(mangaId: string, token: string): Promise<boolean> {
  const { status } = await api.get<boolean>(`/user/follows/manga/${mangaId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    validateStatus: status => status === 200 || status === 404,
  });
  return status === 200 ? true : false;
}

export const favoriteApi = {
  getFavorites,
  followManga,
  unfollowManga,
  checkMangaFavoriteStatus,
};
