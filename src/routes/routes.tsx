import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '@services';
import { useAuthStartup } from 'src/services/auth/use-auth-startup';

import { AppStack } from './app-stack';

export function Routes() {
  useAuthStartup();
  const user = useAuth();

  console.log('user', user);
  

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
