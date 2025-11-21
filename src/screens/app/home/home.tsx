import { MangaCard, Page } from '@components';
import { type AppTabScreenProps } from '@routes';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

export function HomeScreen({}: AppTabScreenProps<'Home'>) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const url = 'https://api.mangadex.org/manga?limit=2&includes[]=cover_art';

  async function testCover() {
    try {
      const res = await fetch(url);
      const json = await res.json();

      const manga = json.data[0];
      const mangaId = manga.id;

      const cover = manga.relationships.find(
        (r: any) => r.type === 'cover_art'
      );

      if (!cover) {
        console.log('Nenhuma capa encontrada.');
        return;
      }

      const fileName = cover.attributes.fileName;

      const imageUrl = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`;

      console.log('IMAGE URL => ', imageUrl);
      setImageUrl(imageUrl);
    } catch (err) {
      console.log('Erro:', err);
    }
  }

  useEffect(() => {
    testCover();
  }, []);

  return (
    <Page>
      <View className="flex-row flex-wrap items-center gap-4">
        <MangaCard imageUrl={imageUrl} />
        <MangaCard imageUrl={imageUrl} />
        <MangaCard imageUrl={imageUrl} />
      </View>
    </Page>
  );
}
