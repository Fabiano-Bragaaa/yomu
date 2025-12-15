import { setupServer } from 'msw/node';

import { homeHandlers } from './home/home-handlers';
import { mangaHandlers } from './manga/manga-handlers';

export const server = setupServer(...homeHandlers, ...mangaHandlers);
