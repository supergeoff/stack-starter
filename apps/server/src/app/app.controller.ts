import { Controller, Get } from '@nestjs/common';
import { AppService, type GetDataResp } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  dummy = new AppService();

  @Get()
  getData(): GetDataResp {
    return this.appService.getData();
  }
}
