import { type PaginatedResponse } from '@infra';

import { mangaAdapter } from '../manga/manga-adapter';
import { favoriteApi } from './favorite-api';
import { type FavoriteMangaSimple } from './favorite-type';

async function getFavorites(
  offset = 0,
  token: string
): Promise<PaginatedResponse<FavoriteMangaSimple>> {
  const response = await favoriteApi.getFavorites({ offset, token });

  return {
    data: mangaAdapter.toMangaSimpleList(response),
    limit: response.limit,
    offset: response.offset,
    total: response.total,
  };
}

export const favoriteService = {
  getFavorites,
};
