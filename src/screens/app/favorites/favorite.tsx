import { Page, Text } from '@components';
import { type AppTabScreenProps } from '@routes';

export function FavoritesScreen({}: AppTabScreenProps<'Favorites'>) {
  return (
    <Page className="flex-1 items-center justify-center">
      <Text>Favorites</Text>
    </Page>
  );
}
