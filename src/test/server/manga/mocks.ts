import { type MangaDexManga } from '@domain';

const mangaResponse: MangaDexManga = {
  id: '1',
  type: 'manga',
  attributes: {
    title: {
      'ja-ro': 'Ura Dungeon Okusan',
    },
    altTitles: [
      {
        ja: '裏ダンジョンおくさん',
      },
      {
        en: 'Hidden Dungeon Wife',
      },
      {
        en: 'The Strongest Wife in the Hidden Dungeon',
      },
    ],
    description: {
      en: 'After the Demon King was slain, the Hidden Dungeon suddenly appeared in a frontier town, said to be overrun by unimaginable monsters and to hold unbelievable treasures!! The newlywed Yui, about to attempt the dungeon, carries a certain secret…!? The Level 99 martial artist who saved the world changes jobs to a Level 1 housewife, only to be dragged into tackling a brutal dungeon!!',
      ja: '魔王が討伐されし後、辺境の町に突如出現した”裏ダンジョン”──そこには想像を絶する魔物が跋扈し、とんでもない秘宝が眠るという！！ダンジョン攻略に挑まんとする新妻・ユイにはとある秘密が…！？世界を救った武道家LV99が、おくさんLV1に転職するも凶悪ダンジョンに挑むはめに──！',
    },
    isLocked: false,
    links: {
      al: '191014',
      ap: 'ura-dungeon-okusan',
      bw: 'series/540402/list',
      mu: 'twk4f6v',
      amz: 'https://www.amazon.co.jp/dp/B0FLPVCNZK',
      cdj: 'https://www.cdjapan.co.jp/product/NEOBK-3114924',
      ebj: 'https://ebookjapan.yahoo.co.jp/books/917304',
      mal: '181064',
      raw: 'https://www.sunday-webry.com/episode/2550912965598344068',
    },
    officialLinks: null,
    originalLanguage: 'ja',
    lastVolume: '',
    lastChapter: '',
    publicationDemographic: 'seinen',
    status: 'ongoing',
    year: 2025,
    contentRating: 'suggestive',
    tags: [
      {
        id: '423e2eae-a7a2-4a8b-ac03-a8351462d71d',
        type: 'tag',
        attributes: {
          name: {
            en: 'Romance',
          },
          description: {},
          group: 'genre',
          version: 1,
        },
        relationships: [],
      },
      {
        id: '4d32cc48-9f00-4cca-9b5a-a839f0764984',
        type: 'tag',
        attributes: {
          name: {
            en: 'Comedy',
          },
          description: {},
          group: 'genre',
          version: 1,
        },
        relationships: [],
      },
      {
        id: '87cc87cd-a395-47af-b27a-93258283bbc6',
        type: 'tag',
        attributes: {
          name: {
            en: 'Adventure',
          },
          description: {},
          group: 'genre',
          version: 1,
        },
        relationships: [],
      },
      {
        id: 'cdc58593-87dd-415e-bbc0-2ec27bf404cc',
        type: 'tag',
        attributes: {
          name: {
            en: 'Fantasy',
          },
          description: {},
          group: 'genre',
          version: 1,
        },
        relationships: [],
      },
    ],
    state: 'published',
    chapterNumbersResetOnNewVolume: false,
    createdAt: '2025-04-18T21:28:52+00:00',
    updatedAt: '2025-11-28T12:14:06+00:00',
    version: 22,
    availableTranslatedLanguages: ['en', 'id'],
    latestUploadedChapter: '78ddd1d9-aa5c-4301-835e-621e0c1c7aad',
  },
  relationships: [
    {
      id: 'c006eec9-1ca9-4cab-8230-d1aa9172f476',
      type: 'author',
    },
    {
      id: '77c2ad42-7a0a-4615-b23f-4836fdfa7a42',
      type: 'artist',
    },
    {
      id: '0bc2bae3-65fa-4999-947c-ba3445111276',
      type: 'cover_art',
      attributes: {
        description: '',
        volume: '2',
        fileName: '4ab0e031-36c4-4f56-bdf4-df71d848bcc6.jpg',
        locale: 'ja',
        createdAt: '2025-11-17T13:03:43+00:00',
        updatedAt: '2025-11-17T13:03:43+00:00',
        version: 1,
      },
    },
    {
      id: '67591cb1-95e1-45fd-ab85-4a45485ffc80',
      type: 'creator',
    },
  ],
};

export const mangaMock = {
  mangaResponse,
};
