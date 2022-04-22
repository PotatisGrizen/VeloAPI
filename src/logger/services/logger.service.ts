import { Injectable } from '@nestjs/common';
import { ILoggerService } from '../interfaces/logger';
import { InjectRepository } from '@nestjs/typeorm';
import { Player_Chat } from '../../utils/typeorm/entities/Logger/Player_Chat.entity';
import { Repository } from 'typeorm';
import { Player_Commands } from '../../utils/typeorm/entities/Logger/Player_Commands.entity';
import { Request } from 'express';
import { VentureChat } from '../../utils/typeorm/entities/Logger/VentureChat.entity';

@Injectable()
export class LoggerService implements ILoggerService {
  constructor(
    @InjectRepository(VentureChat, 'loggerConnection')
    private readonly ventureRepo: Repository<VentureChat>,
  ) {}

  async getAllPlayerData(req: Request) {
    const take = 10;
    const page: number = (req.query.page as unknown as number) || 1;
    const skip = (page - 1) * take;

    const builder = this.ventureRepo.createQueryBuilder();

    const [result] = await builder.take(take).skip(skip).getManyAndCount();

    return result;
  }

  async getPlayerChat(req: Request): Promise<VentureChat[]> {
    const take = 10;
    const page: number = (req.query.page as unknown as number) || 1;
    const skip = (page - 1) * take;

    const builder = this.ventureRepo.createQueryBuilder();

    const { message, playername } = req.query;

    builder.andWhere('Type LIKE :type', {
      type: 'Chat',
    });

    builder.andWhere('Text LIKE :text', {
      text: `%${(message as string) || ''}%`,
    });

    builder.andWhere(`Name LIKE :name`, {
      name: `%${(playername as string) || ''}%`,
    });

    builder.orderBy('ID', 'DESC');

    const [result] = await builder.take(take).skip(skip).getManyAndCount();

    return result;
  }

  async getPlayerCommands(req: Request): Promise<VentureChat[]> {
    const take = 10;
    const page: number = (req.query.page as unknown as number) || 1;
    if (isNaN(page)) return;
    const skip = (page - 1) * take;

    const builder = this.ventureRepo.createQueryBuilder();

    const { command, playername } = req.query;

    builder.andWhere('Type LIKE :type', {
      type: 'Command',
    });

    builder.andWhere('Text LIKE :command', {
      command: `%${(command as string) || ''}%`,
    });

    builder.andWhere(`Name LIKE :name`, {
      name: `%${(playername as string) || ''}%`,
    });

    builder.orderBy('ID', 'DESC');

    const [result] = await builder.take(take).skip(skip).getManyAndCount();

    return result;
  }
}
