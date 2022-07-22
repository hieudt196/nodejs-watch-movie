import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res): any {
    res.sendFile(__dirname, '/');
  }
  @Get('/hello')
  hello(): any {
    return 'Hello World!';
  }
}
