import { PaginatedResponse } from "@infra";
import { favoriteApi } from "./favorite-api";
import { FavoriteMangaSimple } from "./favorite-type";
import { mangaAdapter } from "../manga/manga-adapter";

async function getFavorites(offset = 0):Promise<PaginatedResponse<FavoriteMangaSimple>> {
 const response = await favoriteApi.getFavorites(offset);
 return {
    data: mangaAdapter.toMangaSimpleList(response),
    limit: response.limit,
    offset: response.offset,
    total: response.total,
 };
}

export const favoriteService = {
    getFavorites
}