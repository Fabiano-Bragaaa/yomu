import { queryKeys } from '@infra';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { favoriteService } from '../favorite-service';

export function useToggleFavoriteManga(favorite: boolean) {
  const [isFavorite, setIsFavorite] = useState(favorite);

  useEffect(() => {
    setIsFavorite(favorite);
  }, [favorite])

  function toggleFavorite(mangaId: string, token: string) {
    setIsFavorite(!isFavorite);
    mutate({ mangaId, token });
  }

  const queryClient = useQueryClient();

  const { mutate } = useMutation<
    void,
    Error,
    { mangaId: string; token: string }
  >({
    mutationFn: ({ mangaId, token }) => {
      if (isFavorite) {
        return favoriteService.followManga(mangaId, token);
      }
      return favoriteService.unfollowManga(mangaId, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.favorite,
      });
    },
    onError: () => {
      setIsFavorite(!isFavorite);
    },
  });

  return {
    isFavorite,
    toggleFavorite,
  };
}
