import type { AxiosResponse } from 'axios';
import axios from 'axios';

type ApiResponse = {
  message: string;
};

describe('GET /', () => {
  it('should return a message', async () => {
    const res: AxiosResponse<ApiResponse> = await axios.get(`/`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'check' });
  });
});
