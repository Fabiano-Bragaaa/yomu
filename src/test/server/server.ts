import { setupServer } from 'msw/node';

import { homeHandlers } from './home/home-handlers';

export const server = setupServer(...homeHandlers);
