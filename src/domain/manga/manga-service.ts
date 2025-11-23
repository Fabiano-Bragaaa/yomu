import { type PaginatedResponse } from '@infra';

import { mangaAdapter } from './manga-adapter';
import { mangaApi } from './manga-api';
import { type MangaSimple } from './manga-type';

async function getManga(offset = 0): Promise<PaginatedResponse<MangaSimple>> {
  const response = await mangaApi.getManga(offset);
  return {
    data: mangaAdapter.toMangaSimpleList(response),
    limit: response.limit,
    offset: response.offset,
    total: response.total,
  };
}
export const mangaService = {
  getManga,
};
