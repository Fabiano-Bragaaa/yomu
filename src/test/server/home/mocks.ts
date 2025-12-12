import { type MangaDexResponse } from '@domain';

const mangaDexMock: MangaDexResponse = {
  result: 'ok',
  response: 'collection',
  data: [
    {
      id: '1',
      type: 'manga',
      attributes: {
        title: {
          en: 'My Robot Has Been Acting Strange Lately',
        },
        altTitles: [
          {
            ja: '最近、うちのロボの様子がおかしい',
          },
          {
            'ja-ro': 'Saikin, Uchi no Robo no Yousu ga Okashii',
          },
          {
            en: 'My Robot Is Acting Weird Recently',
          },
        ],
        description: {},
        isLocked: false,
        links: {
          raw: 'https://twitter.com/GoHome_kun/status/1864221202245669068',
        },
        officialLinks: null,
        originalLanguage: 'ja',
        lastVolume: '',
        lastChapter: '',
        publicationDemographic: null,
        status: 'ongoing',
        year: 2024,
        contentRating: 'safe',
        tags: [
          {
            id: '256c8bd9-4904-4360-bf4f-508a76d67183',
            type: 'tag',
            attributes: {
              name: {
                en: 'Sci-Fi',
              },
              description: {},
              group: 'genre',
              version: 1,
            },
            relationships: [],
          },
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
            id: 'e197df38-d0e7-43b5-9b09-2842d0c326dd',
            type: 'tag',
            attributes: {
              name: {
                en: 'Web Comic',
              },
              description: {},
              group: 'format',
              version: 1,
            },
            relationships: [],
          },
        ],
        state: 'published',
        chapterNumbersResetOnNewVolume: false,
        createdAt: '2024-12-06T18:23:36+00:00',
        updatedAt: '2024-12-06T18:23:41+00:00',
        version: 2,
        availableTranslatedLanguages: ['en'],
        latestUploadedChapter: 'e8596234-e014-453e-9aee-0061102a8c76',
      },
      relationships: [
        {
          id: 'e96a03f4-4ecb-4f11-ae3c-7193c7a97d33',
          type: 'author',
        },
        {
          id: 'e96a03f4-4ecb-4f11-ae3c-7193c7a97d33',
          type: 'artist',
        },
        {
          id: '4965e5d8-f2ce-469f-8c6c-5dc55905ab5e',
          type: 'cover_art',
          attributes: {
            description: '',
            volume: '0',
            fileName: 'c1583015-1337-4965-8dc3-7ad8fc0dcec5.jpg',
            locale: 'ja',
            createdAt: '2024-12-06T18:23:38+00:00',
            updatedAt: '2024-12-06T18:23:38+00:00',
            version: 1,
          },
        },
        {
          id: 'f97a9a67-01cc-48d0-a542-59ea341174c0',
          type: 'creator',
        },
      ],
    },
    {
      id: '2',
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
        latestUploadedChapter: 'd7342dd2-d6bc-4980-a4a8-5a624e507d23',
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
    },
  ],
  limit: 2,
  offset: 0,
  total: 89204,
};

export const homeMocks = {
  mangaDexMock,
};
