import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Inject('me')
  private readonly me: any;
  @Inject('me3')
  private readonly mmmm: any;
  constructor(@Inject('test') private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return this.mmmm;
  }
}
