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

async function followManga(mangaId: string, token: string): Promise<void> {
  await favoriteApi.followManga(mangaId, token);
}

async function unfollowManga(mangaId: string, token: string): Promise<void> {
  await favoriteApi.unfollowManga(mangaId, token);
}

async function checkMangaFavoriteStatus(mangaId: string, token: string): Promise<boolean> {
  return await favoriteApi.checkMangaFavoriteStatus(mangaId, token);
}

export const favoriteService = {
  getFavorites,
  followManga,
  unfollowManga,
  checkMangaFavoriteStatus,
};
