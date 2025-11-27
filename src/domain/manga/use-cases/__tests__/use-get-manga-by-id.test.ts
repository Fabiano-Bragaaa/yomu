import { mockClient } from '@test';
import { renderHook, waitFor } from 'test-utils';

import { type MangaDexManga } from '../../manga-type';
import { useGetMangaById } from '../use-get-manga-by-id';

describe('useGetMangaById()', () => {
  it('should return the manga by id', async () => {
    const mockApiResponse: MangaDexManga = {
      id: '1',
      type: 'manga',
      attributes: {
        title: { en: 'Test Manga', ja: 'Test Manga', 'ja-ro': 'Test Manga' },
        description: { en: 'Test Description' },
        altTitles: [],
        isLocked: false,
        links: {},
        officialLinks: null,
        originalLanguage: 'ja',
        lastVolume: null,
        lastChapter: null,
        publicationDemographic: null,
        status: 'ongoing',
        year: 2024,
        contentRating: 'safe',
        tags: [],
        state: 'published',
        chapterNumbersResetOnNewVolume: false,
        createdAt: '2024-01-01T00:00:00+00:00',
        updatedAt: '2024-01-01T00:00:00+00:00',
        version: 1,
        availableTranslatedLanguages: ['en'],
        latestUploadedChapter: null,
      },
      relationships: [
        {
          id: '1',
          type: 'cover_art',
          attributes: {
            fileName: 'cover.jpg',
            description: '',
            volume: null,
            locale: 'ja',
            createdAt: '2024-01-01T00:00:00+00:00',
            updatedAt: '2024-01-01T00:00:00+00:00',
            version: 1,
          },
        },
      ],
    };

    mockClient.get.mockResolvedValue({ data: { data: mockApiResponse } });

    const { result } = renderHook(() => useGetMangaById('1'));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual({
      id: '1',
      title: {
        en: 'Test Manga',
        ja: 'Test Manga',
        'ja-ro': 'Test Manga',
      },
      description: 'Test Description',
      cover: {
        id: '1',
        fileName: 'cover.jpg',
      },
      imageUrl: expect.stringContaining('cover.jpg'),
    });
    expect(mockClient.get).toHaveBeenCalledTimes(1);
    expect(mockClient.get).toHaveBeenCalledWith(`/manga/1`, {
      params: {
        includes: ['cover_art'],
      },
      paramsSerializer: {
        indexes: false,
      },
    });
  });
  it('should return an error if the request fails', async () => {
    const error = new Error('Request failed');
    mockClient.get.mockRejectedValue(error);

    const { result } = renderHook(() => useGetMangaById('1'));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    expect(result.current.error).toEqual(error);
    expect(mockClient.get).toHaveBeenCalledTimes(1);
    expect(mockClient.get).toHaveBeenCalledWith(`/manga/1`, {
      params: {
        includes: ['cover_art'],
      },
      paramsSerializer: {
        indexes: false,
      },
    });
  });
});
