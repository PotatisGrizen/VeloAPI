import { Module } from '@nestjs/common';
import { BansService } from './services/bans.service';
import { BansController } from './controllers/bans.controller';
import { SERVICES } from '../utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bans } from '../utils/typeorm/entities/Bans/Bans.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bans], 'bansConnection')],
  providers: [
    {
      provide: SERVICES.BANS,
      useClass: BansService,
    },
  ],
  controllers: [BansController],
})
export class BansModule {}
