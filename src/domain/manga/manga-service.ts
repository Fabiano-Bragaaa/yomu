import { mangaAdapter } from './manga-adapter';
import { mangaApi } from './manga-api';
import { type MangaSimple } from './manga-type';

async function getManga(): Promise<MangaSimple[]> {
  const response = await mangaApi.getManga();
  return mangaAdapter.toMangaSimpleList(response);
}
export const mangaService = {
  getManga,
};
