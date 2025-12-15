import { AppStack } from '@routes';
import { server } from '@test';
import { renderScreen } from 'test-utils';

describe('integration: Manga', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.restoreHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('Manga flow', async () => {
    renderScreen(<AppStack />, {
      routeName: 'Manga',
      params: {
        id: '1',
      },
    });
  });
});
