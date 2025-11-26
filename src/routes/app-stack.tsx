import { type NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChapterScreen, MangaScreen } from '@screens';

import { AppTabNavigation, type AppTabParamList } from './app-tab-navigation';

export type AppStackParamList = {
  AppTab: NavigatorScreenParams<AppTabParamList>;
  Manga: { id: string };
  Chapter: { id: string };
};

export const { Navigator, Screen } =
  createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="AppTab" component={AppTabNavigation} />
      <Screen name="Manga" component={MangaScreen} />
      <Screen name="Chapter" component={ChapterScreen} />
    </Navigator>
  );
}
