import { Player_Chat } from '../../utils/typeorm/entities/Logger/Player_Chat.entity';
import { Player_Commands } from '../../utils/typeorm/entities/Logger/Player_Commands.entity';
import { Request } from 'express';

export interface ILoggerService {
  getAllPlayerData(): Promise<any>;

  getPlayerChat(req: Request): Promise<Player_Chat[]>;

  getPlayerCommands(req: Request): Promise<Player_Commands[]>;
}
