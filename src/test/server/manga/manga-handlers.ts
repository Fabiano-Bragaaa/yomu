import { type MangaDexManga } from '@domain';
import { http, HttpResponse } from 'msw';

import { mangaMock } from './mocks';

export const mangaHandlers = [
  http.get<{ mangaId: string }>('*/manga/:mangaId', () => {
    const response: MangaDexManga = mangaMock.mangaResponse;

    return HttpResponse.json(response, { status: 200 });
  }),
];
