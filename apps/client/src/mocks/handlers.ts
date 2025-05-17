import { http, HttpResponse } from 'msw';

export const fetchSuccess = http.get('/api', () => {
  return HttpResponse.json({
    message: 'check',
  });
});

export const fetchKO = http.get('/api', () => {
  return new HttpResponse(null, {
    status: 404,
    statusText: 'out of check',
  });
});

export const handlers = [fetchSuccess];
