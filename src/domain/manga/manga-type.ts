export interface MangaCover {
  id: string;
  fileName: string;
}

export interface MangaTitle {
  en?: string;
  ja?: string;
  ['ja-ro']?: string;
}

export interface MangaSimple {
  id: string;
  title: MangaTitle;
  cover: MangaCover | null;
  imageUrl: string | null;
  description: string | null;
}

export interface MangaDexResponse {
  result: string;
  response: string;
  data: MangaDexManga[];
  limit: number;
  offset: number;
  total: number;
}

export interface MangaDexSingleResponse {
  result: string;
  response: string;
  data: MangaDexManga;
}

export interface MangaDexManga {
  id: string;
  type: 'manga';
  attributes: MangaAttributes;
  relationships: MangaRelationship[];
}

interface MangaAttributes {
  title: Record<string, string>;
  altTitles: Record<string, string>[];
  description: Record<string, string>;
  isLocked: boolean;

  links: {
    al?: string;
    ap?: string;
    bw?: string;
    mu?: string;
    amz?: string;
    cdj?: string;
    ebj?: string;
    mal?: string;
    raw?: string;
  };

  officialLinks: any | null;

  originalLanguage: string;
  lastVolume: string | null;
  lastChapter: string | null;
  publicationDemographic: string | null;
  status: 'ongoing' | 'completed' | 'hiatus' | 'cancelled';

  year: number | null;
  contentRating: 'safe' | 'suggestive' | 'erotica' | 'pornographic';

  tags: MangaTag[];

  state: string;
  chapterNumbersResetOnNewVolume: boolean;

  createdAt: string;
  updatedAt: string;
  version: number;

  availableTranslatedLanguages: string[];

  latestUploadedChapter: string | null;
}

interface MangaTag {
  id: string;
  type: 'tag';
  attributes: {
    name: Record<string, string>;
    description: Record<string, string>;
    group: string;
    version: number;
  };
  relationships: any[];
}

interface MangaRelationship {
  id: string;
  type: 'author' | 'artist' | 'cover_art' | 'creator';
  attributes?: CoverArtAttributes;
}

interface CoverArtAttributes {
  description: string;
  volume: string | null;
  fileName: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}
