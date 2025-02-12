import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { Request, Response, NextFunction } from 'express';
import * as session from 'express-session';
import { AaaFilter } from './aaa.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('before main', req.url);
    next();
    console.log('after main', req.url);
  });
  app.use(
    session({
      secret: 'ma',
      cookie: { maxAge: 100000 },
    }),
  );
  app.useStaticAssets('public', { prefix: '/static' });
  app.useGlobalFilters(new AaaFilter());
  app.setBaseViewsDir('views');
  app.setViewEngine('hbs');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
