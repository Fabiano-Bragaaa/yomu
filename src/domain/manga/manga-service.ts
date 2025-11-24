import { type PaginatedResponse } from '@infra';

import { mangaAdapter } from './manga-adapter';
import { mangaApi } from './manga-api';
import { type MangaDexResponse, type MangaSimple } from './manga-type';

async function getManga(offset = 0): Promise<PaginatedResponse<MangaSimple>> {
  const response = await mangaApi.getManga(offset);
  return {
    data: mangaAdapter.toMangaSimpleList(response),
    limit: response.limit,
    offset: response.offset,
    total: response.total,
  };
}

async function getMangaById(id: string): Promise<MangaDexResponse> {
  const response = await mangaApi.getMangaById(id);
  return response;
}

export const mangaService = {
  getManga,
  getMangaById,
};
