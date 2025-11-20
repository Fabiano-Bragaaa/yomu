import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { type CompositeScreenProps } from '@react-navigation/native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import { type AppStackParamList } from './app-stack';
import { type AppTabParamList } from './app-tab-navigation';

export type AppScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type AppTabScreenProps<T extends keyof AppTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList, T>,
    NativeStackScreenProps<AppStackParamList, 'AppTab'>
  >;
