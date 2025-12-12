// Import server directly to avoid loading api-client.mock
import { server } from '../../../../../test/server/server';
import { renderScreen, screen } from 'test-utils';

import { HomeScreen } from '../../home';

describe('integration: Home', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());

  it('should render correctly', async () => {
    renderScreen(<HomeScreen navigation={{} as any} route={{} as any} />);

    const title = await screen.findByText(/My Robot Has Been Acting Strange Lately/i);
    expect(title).toBeTruthy();
  });
});
