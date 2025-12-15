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

interface AppStackProps {
  initialRouteName?: keyof AppStackParamList;
}

export function AppStack({ initialRouteName }: AppStackProps) {
  return (
    <Navigator
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      initialRouteName={initialRouteName}
    >
      <Screen name="AppTab" component={AppTabNavigation} />
      <Screen name="Manga" component={MangaScreen} />
      <Screen name="Chapter" component={ChapterScreen} />
    </Navigator>
  );
}
