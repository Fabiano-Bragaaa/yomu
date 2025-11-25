import { type PaginatedResponse } from '@infra';

import { mangaAdapter } from './manga-adapter';
import { mangaApi } from './manga-api';
import { type MangaChapterSimple, type MangaSimple } from './manga-type';

async function getManga(offset = 0): Promise<PaginatedResponse<MangaSimple>> {
  const response = await mangaApi.getManga(offset);
  return {
    data: mangaAdapter.toMangaSimpleList(response),
    limit: response.limit,
    offset: response.offset,
    total: response.total,
  };
}

async function getMangaById(id: string): Promise<MangaSimple> {
  const response = await mangaApi.getMangaById(id);
  return mangaAdapter.toMangaSimple(response);
}

async function getChaptersByMangaId(
  mangaId: string,
  offset = 0
): Promise<PaginatedResponse<MangaChapterSimple>> {
  const response = await mangaApi.getChaptersByMangaId(mangaId, 20, offset);
  return {
    data: mangaAdapter.toChapterSimpleList(response.data),
    limit: response.limit,
    offset: response.offset,
    total: response.total,
  };
}

export const mangaService = {
  getManga,
  getMangaById,
  getChaptersByMangaId,
};
