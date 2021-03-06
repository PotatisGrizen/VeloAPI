import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { TypeormStore } from 'connect-typeorm';
import { getRepository } from 'typeorm';
import { AppModule } from './app.module';
import { Session } from './utils/typeorm/entities/Session.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const sessionRepository = getRepository(Session);
  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000 * 60 * 24, // One day
      },
      store: new TypeormStore().connect(sessionRepository),
    }),
  );

  app.enableCors({
    origin: ['http://localhost:3000', 'https://zone.velocitysky.net'],
    credentials: true,
  });
  app.use(passport.initialize());
  app.use(passport.session());

  try {
    await app.listen(process.env.PORT);
    console.log(`Running on PORT ${process.env.PORT}`);
  } catch (err) {
    console.error(err);
  }
}
bootstrap();
