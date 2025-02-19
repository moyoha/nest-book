import {
  Global,
  Module,
  OnModuleInit,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';

@Global()
@Module({
  controllers: [AaaController],
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('aaaModule onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('aaaModule onApplicationBootstrap');
  }
}
