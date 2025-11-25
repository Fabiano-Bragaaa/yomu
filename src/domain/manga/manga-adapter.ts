import type {
  MangaChapterSimple,
  MangaCover,
  MangaDexChapter,
  MangaDexManga,
  MangaDexResponse,
  MangaSimple,
  MangaTitle,
} from './manga-type';

function getMangaImageUrl(): { url: string } {
  const url = process.env.EXPO_PUBLIC_IMAGE_URL;
  if (!url) {
    throw new Error('EXPO_PUBLIC_BASE_URL is not set');
  }

  return { url };
}

const { url } = getMangaImageUrl();

function toMangaSimple(manga: MangaDexManga): MangaSimple {
  const title: MangaTitle = manga.attributes.title;

  const coverRel = manga.relationships.find((rel) => rel.type === 'cover_art');

  let cover: MangaCover | null = null;
  let imageUrl: string | null = null;

  if (coverRel?.attributes) {
    cover = {
      id: coverRel.id,
      fileName: coverRel.attributes.fileName,
    };
    imageUrl = `${url}covers/${manga.id}/${coverRel.attributes.fileName}`;
  }

  return {
    id: manga.id,
    title,
    cover,
    imageUrl,
    description: manga.attributes.description.en,
  };
}

function toChapterSimple(chapter: MangaDexChapter): MangaChapterSimple {
  return {
    id: chapter.id,
    attributes: chapter.attributes,
  };
}

function toChapterSimpleList(
  chapters: MangaDexChapter[]
): MangaChapterSimple[] {
  return chapters.map((chapter) => toChapterSimple(chapter));
}

function toMangaSimpleList(response: MangaDexResponse): MangaSimple[] {
  return response.data.map((manga) => toMangaSimple(manga));
}

export const mangaAdapter = {
  toMangaSimple,
  toMangaSimpleList,
  toChapterSimple,
  toChapterSimpleList,
};
