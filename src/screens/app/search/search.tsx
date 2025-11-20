import { Page, Text } from '@components';
import { type AppTabScreenProps } from '@routes';

export function SearchScreen({}: AppTabScreenProps<'Search'>) {
  return (
    <Page className="flex-1 items-center justify-center">
      <Text>Search</Text>
    </Page>
  );
}
