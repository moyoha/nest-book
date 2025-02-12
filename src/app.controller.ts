import {
  Controller,
  Get,
  Inject,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
  SetMetadata,
  Headers,
  Ip,
  Session,
  Req,
  Next,
  HttpCode,
  Header,
  Redirect,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';
import { aaaException } from './aaaException';

@SetMetadata('roles', ['admin'])
@Controller()
export class AppController {
  @Inject('me')
  private readonly me: any;
  @Inject('me3')
  private readonly mmmm: any;
  constructor(@Inject('test') private readonly appService: AppService) {}

  @Get()
  @Aaa('admin2')
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
  @Get('eee')
  eee(
    @Headers('Accept') accept: string,
    @Headers() headers: any,
    @Ip() ip: string,
    @Session() session: any,
    @Req() req: any,
    @Next() next: any,
  ) {
    console.log('accept', accept);
    console.log('headers', headers);
    console.log('ip', ip);
    console.log('session', session);
    console.log('req---', req.url);
    if (!session.views) {
      session.views = 0;
    }
    session.views++;
    next();
    return session.views;
  }

  @Get('eee')
  @HttpCode(201)
  @Header('aa', 'bb')
  eee2() {
    return 'eee2';
  }

  @Get('fff')
  @Redirect('https://www.baidu.com', 301)
  fff() {
    return 'fff';
  }

  @Get('ggg')
  @Render('user')
  ggg() {
    return { name: 'user', age: 18 };
  }

  @Bbb('dbb', 'adminbb')
  hhh() {
    return 'dbb';
  }

  @Get('iii')
  iii(@Ccc() c: string) {
    return c;
  }
  @Get('jjj')
  jjj() {
    throw new aaaException('aaa', 'bbb');
  }
}
