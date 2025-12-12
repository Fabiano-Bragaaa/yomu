import { type MangaDexResponse } from '@domain';
import { http, HttpResponse } from 'msw';

import { homeMocks } from './mocks';

export const homeHandlers = [
  http.get('*/manga', async () => {
    const response: MangaDexResponse = homeMocks.mangaDexMock;

    return HttpResponse.json(response, { status: 200 });
  }),
];
