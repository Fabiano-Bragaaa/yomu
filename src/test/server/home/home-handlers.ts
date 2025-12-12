import { url } from '@api';
import { MANGA_URL, type MangaDexResponse } from '@domain';
import { http, HttpResponse } from 'msw';

import { homeMocks } from './mocks';

const FULL_URL = `${url}${MANGA_URL}`;

export const homeHandlers = [
  http.get(FULL_URL, async () => {
    const response: MangaDexResponse = homeMocks.mangaDexMock;

    return HttpResponse.json(response, { status: 200 });
  }),
];
