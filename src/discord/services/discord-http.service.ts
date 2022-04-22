import { IDiscordHttpService } from '../interfaces/discord-http';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { DISCORD } from '../../utils/constants';
import { DiscordUserType } from '../../utils/types';

@Injectable()
export class DiscordHttpService implements IDiscordHttpService {
  async fetchUserData(accessToken: string) {
    const response = await axios.get<DiscordUserType>(
      `${DISCORD.BASE_URL}/users/@me`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  }
}
