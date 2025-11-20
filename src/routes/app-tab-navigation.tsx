import { Feather } from '@expo/vector-icons';
import { useAppSafeArea } from '@hooks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoritesScreen, HomeScreen, SearchScreen } from '@screens';
import { Platform } from 'react-native';

export type AppTabParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
};

export const { Navigator, Screen } =
  createBottomTabNavigator<AppTabParamList>();

export function AppTabNavigation() {
  const { bottom } = useAppSafeArea();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#4A4A4A',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: bottom,
          paddingTop: 12,
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
