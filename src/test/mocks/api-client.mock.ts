import { api } from '@api';

jest.mock('@api', () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    postForm: jest.fn(),
  },
  formatError: jest.fn((error) => error),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

export const mockClient = api as jest.Mocked<typeof api>;
