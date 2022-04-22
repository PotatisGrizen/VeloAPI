import { Module } from '@nestjs/common';
import { BansService } from './services/bans.service';
import { BansController } from './controllers/bans.controller';
import { SERVICES } from '../utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bans } from '../utils/typeorm/entities/Bans/Bans.entity';
import { History } from '../utils/typeorm/entities/Bans/History.entity';
import { Kicks } from '../utils/typeorm/entities/Bans/Kicks.entity';
import { Mutes } from '../utils/typeorm/entities/Bans/Mutes.entity';
import { Warnings } from '../utils/typeorm/entities/Bans/Warnings.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [Bans, History, Kicks, Mutes, Warnings],
      'bansConnection',
    ),
  ],
  providers: [
    {
      provide: SERVICES.BANS,
      useClass: BansService,
    },
  ],
  controllers: [BansController],
})
export class BansModule {}
