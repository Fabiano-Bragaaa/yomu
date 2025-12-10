import { api } from '@api';

import { type FavoriteMangaResponse } from './favorite-type';

async function getFavorites(
  offset = 0,
  limit = 20
): Promise<FavoriteMangaResponse> {
  const { data } = await api.get<FavoriteMangaResponse>('/user/follows/manga', {
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

export const favoriteApi = {
  getFavorites,
};
