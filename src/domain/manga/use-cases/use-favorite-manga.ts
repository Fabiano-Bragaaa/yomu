import { useState } from 'react';

export function useFavoriteManga() {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  return {
    isFavorite,
    toggleFavorite,
  };
}
