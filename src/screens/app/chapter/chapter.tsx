import { Page, Text } from '@components';
import { type AppScreenProps } from '@routes';
import { useGetChapterPages } from 'src/domain/manga/use-cases/use-get-chapter-pages';

export function ChapterScreen({ route }: AppScreenProps<'Chapter'>) {
  const { id } = route.params;
  const { data } = useGetChapterPages(id);

  return (
    <Page>
      <Text>
        {data?.data.length} {id}
      </Text>
    </Page>
  );
}
