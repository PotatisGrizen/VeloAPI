import { Player_Chat } from '../../utils/typeorm/entities/Logger/Player_Chat.entity';
import { Player_Commands } from '../../utils/typeorm/entities/Logger/Player_Commands.entity';
import { Request } from 'express';
import { VentureChat } from '../../utils/typeorm/entities/Logger/VentureChat.entity';

export interface ILoggerService {
  getAllPlayerData(req: Request): Promise<VentureChat[]>;

  getPlayerChat(req: Request): Promise<VentureChat[]>;

  getPlayerCommands(req: Request): Promise<VentureChat[]>;
}
