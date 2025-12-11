import { act, renderHook, waitFor } from 'test-utils';

import { favoriteService } from '../../favorite-service';
import { useToggleFavoriteManga } from '../use-toggle-favorite-manga';
import { mockedData } from './mocked-data/mocked-data';

jest.mock('../../favorite-service', () => ({
  favoriteService: {
    followManga: jest.fn(),
    unfollowManga: jest.fn(),
  },
}));

describe('useToggleFavoriteManga()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with the provided favorite state', () => {
    const { result } = renderHook(() => useToggleFavoriteManga(true));

    expect(result.current.isFavorite).toBe(true);
  });

  it('should update isFavorite when the favorite prop changes', () => {
    const { result, rerender } = renderHook(
      ({ favorite }) => useToggleFavoriteManga(favorite),
      { initialProps: { favorite: false } }
    );

    expect(result.current.isFavorite).toBe(false);

    rerender({ favorite: true });

    expect(result.current.isFavorite).toBe(true);
  });

  it('should toggle favorite from false to true and call followManga', async () => {
    jest.spyOn(favoriteService, 'followManga').mockResolvedValue(undefined);

    const { result } = renderHook(() => useToggleFavoriteManga(false));

    expect(result.current.isFavorite).toBe(false);

    await act(async () => {
      result.current.toggleFavorite(
        mockedData.mockMangaId,
        mockedData.mockToken
      );
    });

    await waitFor(() => {
      expect(result.current.isFavorite).toBe(true);
      expect(favoriteService.followManga).toHaveBeenCalledTimes(1);
    });

    expect(favoriteService.followManga).toHaveBeenCalledWith(
      mockedData.mockMangaId,
      mockedData.mockToken
    );
  });

  it('should toggle favorite from true to false and call unfollowManga', async () => {
    jest.spyOn(favoriteService, 'unfollowManga').mockResolvedValue(undefined);

    const { result } = renderHook(() => useToggleFavoriteManga(true));

    expect(result.current.isFavorite).toBe(true);

    await act(async () => {
      result.current.toggleFavorite(
        mockedData.mockMangaId,
        mockedData.mockToken
      );
    });

    await waitFor(() => {
      expect(result.current.isFavorite).toBe(false);
      expect(favoriteService.unfollowManga).toHaveBeenCalledTimes(1);
    });

    expect(favoriteService.unfollowManga).toHaveBeenCalledWith(
      mockedData.mockMangaId,
      mockedData.mockToken
    );
  });

  it('should invalidate queries on successful mutation', async () => {
    jest.spyOn(favoriteService, 'followManga').mockResolvedValue(undefined);

    const { result } = renderHook(() => useToggleFavoriteManga(false));

    await act(async () => {
      result.current.toggleFavorite(
        mockedData.mockMangaId,
        mockedData.mockToken
      );
    });

    await waitFor(() => {
      expect(favoriteService.followManga).toHaveBeenCalledTimes(1);
    });
  });

  it('should rollback the favorite state on error', async () => {
    const error = new Error('Failed to follow manga');
    jest.spyOn(favoriteService, 'followManga').mockRejectedValue(error);

    const { result } = renderHook(() => useToggleFavoriteManga(false));

    expect(result.current.isFavorite).toBe(false);

    await act(async () => {
      result.current.toggleFavorite(
        mockedData.mockMangaId,
        mockedData.mockToken
      );
    });

    await waitFor(() => {
      expect(result.current.isFavorite).toBe(false);
      expect(favoriteService.followManga).toHaveBeenCalledTimes(1);
    });
  });

  it('should rollback from true to false on error', async () => {
    const error = new Error('Failed to unfollow manga');
    jest.spyOn(favoriteService, 'unfollowManga').mockRejectedValue(error);

    const { result } = renderHook(() => useToggleFavoriteManga(true));

    expect(result.current.isFavorite).toBe(true);

    await act(async () => {
      result.current.toggleFavorite(
        mockedData.mockMangaId,
        mockedData.mockToken
      );
    });

    await waitFor(() => {
      expect(result.current.isFavorite).toBe(true);
      expect(favoriteService.unfollowManga).toHaveBeenCalledTimes(1);
    });
  });
});
