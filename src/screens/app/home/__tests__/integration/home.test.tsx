import { renderScreen } from 'test-utils';

import { HomeScreen } from '../../home';

describe('integration: Home', () => {
  it('should render correctly', () => {
    renderScreen(<HomeScreen navigation={{} as any} route={{} as any} />);
  });
});
