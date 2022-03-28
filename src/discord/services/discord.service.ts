import { Inject, Injectable } from '@nestjs/common';
import { IDiscordService } from '../interfaces/discord';
import { SERVICES } from '../../utils/constants';
import { IDiscordHttpService } from '../interfaces/discord-http';

@Injectable()
export class DiscordService implements IDiscordService {
  constructor(
    @Inject(SERVICES.DISCORD_HTTP)
    private readonly discordHttpService: IDiscordHttpService,
  ) {}
}
