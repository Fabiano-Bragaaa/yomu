import { MangaCard, Page } from '@components';
import { mangaService } from '@domain';
import { type AppTabScreenProps } from '@routes';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

export function HomeScreen({}: AppTabScreenProps<'Home'>) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  async function testCover() {
    try {
      const manga = await mangaService.getManga();
      const imageUrl = `https://uploads.mangadex.org/covers/${manga[0].id}/${manga[0].cover?.fileName}`;

      console.log('IMAGE URL => ', manga[0]);

      setImageUrl(imageUrl);
    } catch (err) {
      console.log('Erro axios:', err);
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
