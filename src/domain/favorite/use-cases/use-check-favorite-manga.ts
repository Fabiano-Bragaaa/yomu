import { queryKeys } from '@infra';
import { useQuery } from '@tanstack/react-query';

import { favoriteService } from '../favorite-service';

export function useCheckFavoriteManga({
  mangaId,
  token,
}: {
  mangaId?: string;
  token?: string;
}) {
  const { data, isPending } = useQuery<boolean>({
    queryKey: queryKeys.checkFavoriteManga(mangaId!),
    queryFn: () => favoriteService.checkMangaFavoriteStatus(mangaId!, token!),
    enabled: !!mangaId && !!token,
  });

  return {
    loading: isPending,
    isFavorite: data,
  };
}
