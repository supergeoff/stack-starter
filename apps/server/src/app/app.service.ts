import { Injectable } from '@nestjs/common';

export type GetDataResp = {
  message: string;
};

@Injectable()
export class AppService {
  getData(): GetDataResp {
    return { message: 'check' };
  }
}
