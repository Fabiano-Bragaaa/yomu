import type {
  MangaCover,
  MangaDexManga,
  MangaDexResponse,
  MangaSimple,
  MangaTitle,
} from './manga-type';

function toMangaSimple(manga: MangaDexManga): MangaSimple {
  const title: MangaTitle = manga.attributes.title;

  const coverRel = manga.relationships.find((rel) => rel.type === 'cover_art');

  let cover: MangaCover | null = null;

  if (coverRel?.attributes) {
    cover = {
      id: coverRel.id,
      fileName: coverRel.attributes.fileName,
    };
  }

  return {
    id: manga.id,
    title,
    cover,
  };
}

function toMangaSimpleList(response: MangaDexResponse): MangaSimple[] {
  return response.data.map((manga) => toMangaSimple(manga));
}

export const mangaAdapter = {
  toMangaSimple,
  toMangaSimpleList,
};
