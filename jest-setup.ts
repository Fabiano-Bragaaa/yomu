import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

// @ts-ignore
global.window = {};
// @ts-ignore
global.window = global;

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) =>
    children,
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
    setOptions: jest.fn(),
    dispatch: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }),
  useRoute: () => ({
    params: {},
    key: 'test',
    name: 'test',
  }),
  useFocusEffect: jest.fn(),
  useIsFocused: () => true,
  useScrollToTop: jest.fn(),
  createNavigationContainerRef: jest.fn(),
}));

process.env.EXPO_PUBLIC_BASE_URL = 'https://api.test.com';
process.env.EXPO_PUBLIC_IMAGE_URL = 'https://image.test.com';
process.env.EXPO_PUBLIC_AUTH_URL = 'https://auth.test.com';
process.env.EXPO_PUBLIC_CLIENT_ID = 'test-client-id';
process.env.EXPO_PUBLIC_CLIENT_SECRET = 'test-client-secret';
process.env.EXPO_PUBLIC_GRANT_TYPE = 'password';
process.env.EXPO_PUBLIC_GRANT_TYPE_REFRESH = 'refresh_token';
process.env.EXPO_PUBLIC_USERNAME = 'test-user';
process.env.EXPO_PUBLIC_PASSWORD = 'test-password';

if (typeof globalThis.structuredClone === 'undefined') {
  // @ts-ignore
  global.structuredClone = (obj: any) => JSON.parse(JSON.stringify(obj));
}

// @ts-ignore
global.__ExpoImportMetaRegistry = {
  get: () => undefined,
};

const originalError = console.error;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    const message = args.join(' ');
    if (typeof message === 'string' && message.includes('not wrapped in act')) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
