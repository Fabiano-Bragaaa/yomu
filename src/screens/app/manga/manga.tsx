import { Text } from '@components';
import { type AppScreenProps } from '@routes';
import React from 'react';
import { View } from 'react-native';

export function MangaScreen({ route }: AppScreenProps<'Manga'>) {
  const { id } = route.params;
  return (
    <View>
      <Text>Manga {id}</Text>
    </View>
  );
}
