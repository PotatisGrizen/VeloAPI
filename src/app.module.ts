import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APIentities, Bansentities, Loggerentities } from './utils/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
import { DiscordModule } from './discord/discord.module';
import { LoggerModule } from './logger/logger.module';
import { BansModule } from './bans/bans.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.env.production'
          : '.env.development',
    }),
    PassportModule.register({ session: true }),
    /**
     *
     * The default connection for all of the AUTH connections.
     *
     */
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST,
      port: 3306,
      username: process.env.MYSQL_DB_USERNAME,
      password: process.env.MYSQL_DB_PASSWORD,
      database: process.env.MYSQL_DB_DATABASE,
      synchronize: process.env.NODE_ENV != 'production', // SET THIS TO FALSE DURING PRODUCTION
      entities: APIentities,
    }),
    /**
     *
     * The default connection for LOGGER data.
     *
     */
    TypeOrmModule.forRoot({
      name: 'loggerConnection',
      type: 'mysql',
      host: process.env.LOGGER_MYSQL_DB_HOST,
      port: 3306,
      username: process.env.LOGGER_MYSQL_DB_USERNAME,
      password: process.env.LOGGER_MYSQL_DB_PASSWORD,
      database: process.env.LOGGER_MYSQL_DB_DATABASE,
      synchronize: false, // SET THIS TO FALSE DURING PRODUCTION
      entities: Loggerentities,
    }),
    /**
     *
     * The connection for getting data about bans.
     *
     */
    TypeOrmModule.forRoot({
      name: 'bansConnection',
      type: 'mysql',
      host: process.env.BANS_MYSQL_DB_HOST,
      port: 3306,
      username: process.env.BANS_MYSQL_DB_USERNAME,
      password: process.env.BANS_MYSQL_DB_PASSWORD,
      database: process.env.BANS_MYSQL_DB_DATABASE,
      synchronize: false, // SET THIS TO FALSE DURING PRODUCTION
      entities: Bansentities,
    }),
    AuthModule,
    UserModule,
    DiscordModule,
    LoggerModule,
    BansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
