import axios from 'axios';

describe('GET /server', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/server`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Check' });
  });
});
