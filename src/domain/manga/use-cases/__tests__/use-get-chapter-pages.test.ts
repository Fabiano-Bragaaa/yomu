import { mockClient } from '@test';
import { renderHook, waitFor } from 'test-utils';

import { type MangaDexAtHomeResponse } from '../../manga-type';
import { useGetChapterPages } from '../use-get-chapter-pages';

describe('useGetChapterPages()', () => {
  it('should return the chapter pages', async () => {
    const mockChapterResponse: MangaDexAtHomeResponse = {
      baseUrl: 'https://example.com',
      chapter: {
        hash: '1234567890',
        data: ['1234567890'],
        dataSaver: ['1234567890'],
      },
    };

    mockClient.get.mockResolvedValue({ data: mockChapterResponse });

    const { result } = renderHook(() => useGetChapterPages('1234567890'));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockChapterResponse);
    expect(mockClient.get).toHaveBeenCalledTimes(1);
    expect(mockClient.get).toHaveBeenCalledWith(`/at-home/server/1234567890`);
  });
  it('should return an error if the request fails', async () => {
    const error = new Error('Request failed');
    mockClient.get.mockRejectedValue(error);

    const { result } = renderHook(() => useGetChapterPages('1234567890'));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toEqual(error);
    expect(mockClient.get).toHaveBeenCalledTimes(1);
    expect(mockClient.get).toHaveBeenCalledWith(`/at-home/server/1234567890`);
  });
});
