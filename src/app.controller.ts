import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';

@Controller()
export class AppController {
  @Inject('me')
  private readonly me: any;
  @Inject('me3')
  private readonly mmmm: any;
  constructor(@Inject('test') private readonly appService: AppService) {}

  @Get()
  @UseGuards(LoginGuard)
  getHello(): string {
    console.log('hello___');
    return this.appService.getHello();
    // return this.mmmm;
  }
  @Get('test')
  getTest(): string {
    console.log('hello___test');
    return this.appService.getHello();
  }
}
