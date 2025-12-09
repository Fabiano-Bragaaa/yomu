import { NavigationContainer } from '@react-navigation/native';
import { useAuthStartup } from 'src/services/auth/use-auth-startup';

import { AppStack } from './app-stack';

export function Routes() {
  useAuthStartup();
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
