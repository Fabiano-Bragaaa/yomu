import { renderHook, waitFor } from 'test-utils';

import { favoriteService } from '../../favorite-service';
import { useCheckFavoriteManga } from '../use-check-favorite-manga';
import { mockedData } from './mocked-data/mocked-data';

jest.mock('../../favorite-service', () => ({
  favoriteService: {
    checkMangaFavoriteStatus: jest.fn(),
  },
}));

describe('useCheckFavoriteManga()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should check favorite manga status', async () => {
    jest
      .spyOn(favoriteService, 'checkMangaFavoriteStatus')
      .mockResolvedValue(true);

    const { result } = renderHook(() =>
      useCheckFavoriteManga({
        mangaId: mockedData.mockMangaId,
        token: mockedData.mockToken,
      })
    );

    await waitFor(() => {
      expect(result.current.isFavorite).toBe(true);
    });

    expect(favoriteService.checkMangaFavoriteStatus).toHaveBeenCalledTimes(1);
    expect(favoriteService.checkMangaFavoriteStatus).toHaveBeenCalledWith(
      mockedData.mockMangaId,
      mockedData.mockToken
    );
  });
  it('should return error on check favorite manga status', async () => {
    jest.spyOn(favoriteService, 'checkMangaFavoriteStatus').mockRejectedValue(new Error('Failed to check favorite manga status'));
    const { result } = renderHook(() =>
      useCheckFavoriteManga({
        mangaId: mockedData.mockMangaId,
        token: mockedData.mockToken,
      })
    );
    await waitFor(() => {
      expect(result.current.error).toBeDefined();
    });
  });
});
