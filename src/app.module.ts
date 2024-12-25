import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';

@Module({
  controllers: [AppController],
  providers: [
    {
      provide: 'test',
      useClass: AppService,
    },
    {
      provide: 'me',
      useValue: 'me',
    },
    {
      provide: 'me2',
      useFactory: () => 'me2',
    },
    {
      provide: 'me3',
      useFactory: (param, param2) => {
        console.log('useFactory', param2);
        return `param: ${param}`;
      },
      inject: ['me', 'me2'],
    },
  ],
  imports: [AaaModule, BbbModule],
})
export class AppModule {}
