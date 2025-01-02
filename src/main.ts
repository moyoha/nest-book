import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('before', req.url);
    next();
    console.log('after', req.url);
  });
  app.useStaticAssets('public', { prefix: '/static' });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
