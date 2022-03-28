import { Injectable } from '@nestjs/common';
import { ILoggerService } from '../interfaces/logger';
import { InjectRepository } from '@nestjs/typeorm';
import { Player_Chat } from '../../utils/typeorm/entities/Logger/Player_Chat.entity';
import { Repository } from 'typeorm';
import { Player_Commands } from '../../utils/typeorm/entities/Logger/Player_Commands.entity';
import { Request } from 'express';

@Injectable()
export class LoggerService implements ILoggerService {
  constructor(
    @InjectRepository(Player_Chat, 'loggerConnection')
    private readonly playerChatRepo: Repository<Player_Chat>,
    @InjectRepository(Player_Commands, 'loggerConnection')
    private readonly playerCommandsRepo: Repository<Player_Commands>,
  ) {}

  async getAllPlayerData() {
    return [
      ...(await this.playerChatRepo.find()),
      ...(await this.playerCommandsRepo.find()),
    ];
  }

  async getPlayerChat(req: Request): Promise<Player_Chat[]> {
    const builder = this.playerChatRepo.createQueryBuilder();
    const query = req.query;

    if (query.message) {
      builder.andWhere('Message LIKE :s', {
        s: `%${query.message}%`,
      });
    }

    if (query.playername) {
      builder.andWhere(`Playername LIKE :s`, {
        s: `%${query.playername}%`,
      });
    }

    console.log(builder.getQuery());
    return await builder.getMany();
  }

  async getPlayerCommands(req: Request): Promise<Player_Commands[]> {
    const builder = this.playerCommandsRepo.createQueryBuilder();
    const query = req.query;

    if (query.command) {
      builder.andWhere('Command LIKE :s', {
        s: `%${query.command}%`,
      });
    }

    if (query.playername) {
      builder.andWhere('Playername LIKE :s', {
        s: `%${query.playername}%`,
      });
    }

    console.log(builder.getQuery());
    return await builder.getMany();
  }
}
