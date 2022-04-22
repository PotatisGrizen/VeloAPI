import { DiscordUserType } from '../../utils/types';

export interface IDiscordService {
  getUserData(accessToken: string);
}
