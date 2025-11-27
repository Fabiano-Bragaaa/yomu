import { type MangaTitle } from '@domain';

export function getMangaTitle(title: MangaTitle): string {
  if (title.en) return title.en;
  if (title['ja-ro']) return title['ja-ro'];
  if (title.ja) return title.ja;

  const rest = Object.values(title);
  if (rest.length > 0) return rest[0];

  return 'Untitled';
}
