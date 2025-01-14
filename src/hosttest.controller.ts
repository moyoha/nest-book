import { Controller, Get } from '@nestjs/common';

@Controller({ host: ':host.0.0.1', path: 'host' })
export class HosttestController {
  @Get('bbb')
  hello() {
    return 'hello';
  }
}
