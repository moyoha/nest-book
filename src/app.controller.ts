import {
  Controller,
  Get,
  Inject,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

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
  @UseInterceptors(TimeInterceptor)
  getTest(): string {
    console.log('hello___test');
    return this.appService.getHello();
  }

  @Get('ccc')
  @UseFilters(TestFilter)
  ccc(@Query('num', ValidatePipe) num: number) {
    return num + 1;
  }

  @Get('ddd')
  @UseFilters(TestFilter)
  ddd() {
    throw new Error('123');
  }
}
