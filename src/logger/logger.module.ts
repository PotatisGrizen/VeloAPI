import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerService } from './services/logger.service';
import { ROUTES, SERVICES } from '../utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player_Chat } from '../utils/typeorm/entities/Logger/Player_Chat.entity';
import { Player_Commands } from '../utils/typeorm/entities/Logger/Player_Commands.entity';
import { LoggerController } from './controllers/logger.controller';
import { VentureChat } from '../utils/typeorm/entities/Logger/VentureChat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VentureChat], 'loggerConnection')],
  controllers: [LoggerController],
  providers: [
    {
      provide: SERVICES.LOGGER,
      useClass: LoggerService,
    },
  ],
})
export class LoggerModule implements NestModule {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  configure(consumer: MiddlewareConsumer) {}
}
