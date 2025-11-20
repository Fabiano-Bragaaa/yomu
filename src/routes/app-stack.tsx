import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@screens';

export type AppStackParamList = {
  Home: undefined;
  Settings: undefined;
};

export const { Navigator, Screen } =
  createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
}
