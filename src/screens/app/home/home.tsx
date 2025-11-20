import { Page, Text } from '@components';
import { type AppTabScreenProps } from '@routes';

export function HomeScreen({}: AppTabScreenProps<'Home'>) {
  return (
    <Page className="flex-1 items-center justify-center">
      <Text>Home</Text>
    </Page>
  );
}
