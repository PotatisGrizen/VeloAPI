import { Controller, Get, Inject } from '@nestjs/common';
import { ROUTES, SERVICES } from '../../utils/constants';
import { IDiscordService } from '../interfaces/discord';
import { AuthUser } from '../../utils/decorators';
import { User } from '../../utils/typeorm/entities/User.entity';

@Controller(ROUTES.DISCORD)
export class DiscordController {
  constructor(
    @Inject(SERVICES.DISCORD) private readonly discordService: IDiscordService,
  ) {}

  @Get('getUserData')
  async getUserData(@AuthUser() user: User) {
    if (!user)
      return {
        status: '403',
      };
    return await this.discordService.getUserData(user.accessToken);
  }
}
