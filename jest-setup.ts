// @ts-ignore
global.window = {};
// @ts-ignore
global.window = global;

process.env.EXPO_PUBLIC_BASE_URL = 'https://api.test.com';
process.env.EXPO_PUBLIC_IMAGE_URL = 'https://image.test.com';

if (typeof globalThis.structuredClone === 'undefined') {
  // @ts-ignore
  global.structuredClone = (obj: any) => JSON.parse(JSON.stringify(obj));
}

// @ts-ignore
global.__ExpoImportMetaRegistry = {
  get: () => undefined,
};
