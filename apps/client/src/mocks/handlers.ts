import { http, type HttpHandler, HttpResponse } from 'msw';

export const fetchSuccess: HttpHandler = http.get('/api', () => {
  return HttpResponse.json({
    message: 'check',
  });
});

export const fetchKO: HttpHandler = http.get('/api', () => {
  return new HttpResponse(null, {
    status: 404,
    statusText: 'out of check',
  });
});

export const handlers: HttpHandler[] = [fetchSuccess];
